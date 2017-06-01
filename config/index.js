const SUPPORTED_LANG = ['en', 'fr']
const __LANG__ = require('./.config.lang.js')

export default {
  __LANG__: SUPPORTED_LANG.includes(__LANG__) ? __LANG__ : 'en',
  __ENV__: require('./.config.env.js') || 'mock',
  IMAGE_SERVER_URL: 'http://localhost',
  IMAGE_SERVER_PORT: 5000,
  MAX_TIMELINE_ITEMS: 4,
  MAX_GITHUB_REPOS: 4,
  GITHUB_TOKEN: require('./.config.github.js') || ''
}
