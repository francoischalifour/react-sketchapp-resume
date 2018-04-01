/* eslint no-console: off */

const path = require('path')
const exiftool = require('node-exiftool')
const exiftoolBin = require('dist-exiftool')

const { name: library, version, repository, author } = require('../package')
const { name = '' } = author
const LANGUAGES = ['en', 'fr']
const OUTPUT_PATH = './build'
// Exif date format is YYYY:mm:dd HH:MM:SS
const date = new Date()
  .toISOString()
  .replace(/-/g, ':')
  .replace('T', ' ')

LANGUAGES.forEach(language => {
  const metadata = {
    all: '', // remove existing tags
    title: language === 'en' ? `${name} - Resume` : `${name} - CV`,
    author: name || '',
    subject: 'CV',
    producer: `${library} ${version} ${name}`,
    comment:
      language === 'en'
        ? `Created with ${library}: https://github.com/${repository}`
        : `Créé avec ${library}: https://github.com/${repository}`,
    createdate: date,
    modifydate: date,
  }

  const ep = new exiftool.ExiftoolProcess(exiftoolBin)

  ep
    .open()
    .then(() =>
      ep.writeMetadata(
        path.join(__dirname, '..', `${OUTPUT_PATH}/resume.${language}.pdf`),
        metadata,
        ['overwrite_original']
      )
    )
    .then(console.log)
    .then(() => ep.close())
    .catch(console.error)
})
