import React from 'react'
import { array } from 'prop-types'
import { Text, View } from 'react-sketchapp'
import headings from '../../data/headings'
import { getDataLocale } from '../utils'
import { typography, colors } from '../designSystem'
import Heading from '../components/Heading'
import Repository from '../components/Repository'
import Code from '../components/Code'

const heading = getDataLocale(headings.github)

const GitHub = ({ repos }) => (
  <View name='GitHub'>
    <Heading title={heading} />

    <View name='Repositories'>
      {!Array.isArray(repos)
        ? <Code type='error'>{repos}</Code>
        : repos.length === 0
          ? <Text style={{...typography.Body, color: colors.DarkGray }}>No pinned repositories.</Text>
          : repos.map((repo, index) => (
            <Repository
              key={index}
              name={repo.name}
              description={repo.description}
              language={repo.primaryLanguage}
              noStargazers={repo.stargazers.totalCount}
              noForks={repo.forks.totalCount}
            />
          ))}
    </View>
  </View>
)

GitHub.propTypes = {
  repos: array.isRequired
}

export default GitHub
