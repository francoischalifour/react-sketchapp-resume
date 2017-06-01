import traverse from 'traverse'
import { __LANG__ } from '../config'

const getDataLocale = (data, language = __LANG__) =>
  traverse(data).map(function (item) {
    if (this.key === language) {
      this.parent.update(item)
    }
  })

const getAge = dateString =>
  Math.floor((new Date() - new Date(dateString)) / (1000 * 60 * 60 * 24 * 365.25))

const sortByDate = (prev, next) =>
  !prev.ended_at ? -1 : new Date(next.ended_at) - new Date(prev.ended_at)

const formatDateInterval = (start, end) =>
  isNaN(end)
    ? `${start}﹣∞`
    : (start !== end)
      ? `${start}﹣${end}`
      : start

export default {
  getDataLocale,
  getAge,
  sortByDate,
  formatDateInterval
}
