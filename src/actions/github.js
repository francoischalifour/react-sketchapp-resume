import fetch from 'sketch-module-fetch-polyfill'
import config from '../../config'
import about from '../../data/about'

const { github: username } = about.social
const { __ENV__, GITHUB_TOKEN, MAX_GITHUB_REPOS, GITHUB_ENDPOINT } = config
const QUERY = `query ($login: String = "${username}", $first: Int = ${MAX_GITHUB_REPOS}) {
  user(login: $login) {
    pinnedItems(first: $first, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          nameWithOwner
          owner {
            login
          }
          description
          primaryLanguage {
            name
            color
          }
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
    }
  }
}`

export const getRepos = () => {
  return (__ENV__ === 'mock'
    ? Promise.resolve(require('../../data/mocks/github.json'))
    : fetch(GITHUB_ENDPOINT, {
        method: 'POST',
        body: {
          query: QUERY.replace(/(\s\n)/g, ''),
        },
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        }.then(res => res.json()),
      })
  )
    .then(json => json.data.user.pinnedItems.nodes)
    .then(repos =>
      repos.map(repo => ({
        ...repo,
        displayName:
          username === repo.owner.login ? repo.name : repo.nameWithOwner,
      }))
    )
    .catch(err => err.message)
}
