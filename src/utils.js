import config from '../config'
const { __LANG__ } = config

function traverseHelper(data, language) {
  if (typeof data !== 'object') {
    return data
  }
  if (data[language]) {
    return data[language]
  }
  if (Array.isArray(data)) {
    return data.map(item => traverseHelper(item, language))
  }
  return Object.keys(data).reduce((obj, key) => {
    obj[key] = traverseHelper(data[key], language)
    return obj
  }, {})
}

export const getDataLocale = (data, language = __LANG__) =>
  traverseHelper(data, language)

export const getAge = dateString =>
  Math.floor(
    (new Date() - new Date(dateString)) / (1000 * 60 * 60 * 24 * 365.25)
  )

export const sortByDate = (prev, next) =>
  !prev.ended_at ? -1 : new Date(next.ended_at) - new Date(prev.ended_at)

export const formatDateInterval = (start, end) =>
  isNaN(end) ? `${start}﹣∞` : start !== end ? `${start}﹣${end}` : start

export default {
  getDataLocale,
  getAge,
  sortByDate,
  formatDateInterval,
}
