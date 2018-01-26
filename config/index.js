import __LANG__ from './.config.lang.js'
import GITHUB_TOKEN from './.config.github.js'
const SUPPORTED_LANG = ['en', 'fr']

export default {
  __LANG__: SUPPORTED_LANG.includes(__LANG__) ? __LANG__ : 'en',
  __ENV__: require('./.config.env.js').default || 'mock',
  IMAGE_SERVER_URL: 'http://localhost',
  IMAGE_SERVER_PORT: 5000,
  MAX_TIMELINE_ITEMS: 4,
  MAX_GITHUB_REPOS: 4,
  GITHUB_ENDPOINT: 'https://api.github.com/graphql',
  GITHUB_TOKEN
}
