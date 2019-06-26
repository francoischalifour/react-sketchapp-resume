require('dotenv').config()
const fetch = require('node-fetch')

const { GITHUB_TOKEN, GITHUB_USERNAME, GITHUB_MAX_REPOS } = process.env
const GITHUB_ENDPOINT = 'https://api.github.com/graphql'

const query = `query ($login: String!, $first: Int!) {
  repositoryOwner(login: $login) {
    ... on User {
      pinnedRepositories(first: $first) {
        edges {
          node {
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
  }
}`

const variables = {
  login: GITHUB_USERNAME,
  first: Number(GITHUB_MAX_REPOS),
}

fetch(GITHUB_ENDPOINT, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query, variables }),
})
  .then(res => res.json())
  .then(data => JSON.stringify(data, null, 2))
  .then(console.log)
