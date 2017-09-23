import fetch from 'sketch-module-fetch-polyfill'
import { __ENV__, GITHUB_TOKEN, MAX_GITHUB_REPOS, GITHUB_ENDPOINT } from '../../config'
import { social } from '../../data/about'

const { github: username } = social

const QUERY = `query ($login: String = "${username}", $first: Int = ${MAX_GITHUB_REPOS}) {
  repositoryOwner(login: $login) {
    ... on User {
      pinnedRepositories(first: $first) {
        edges {
          node {
            name
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
  }
}`

const getRepos = () => {
  return (__ENV__ === 'mock'
    ? Promise.resolve(require('../../data/mocks/github.json'))
    : fetch(GITHUB_ENDPOINT, {
      method: 'POST',
      body: {
        query: QUERY.replace(/(\s\n)/g, '')
      },
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      }
      .then(res => res.json())
    }))
      .then(json => json.data)
      .then(data => data.repositoryOwner)
      .then(owner => owner.pinnedRepositories)
      .then(repos => repos.edges)
      .then(edges => edges.map(e => e.node))
      .catch(err => err.message)
}

export default {
  getRepos
}
