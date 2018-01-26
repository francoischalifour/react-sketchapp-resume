import React from 'react'
import { string, number, shape } from 'prop-types'
import { Text, View, StyleSheet } from 'react-sketchapp'
import { spacing, typography, colors } from '../designSystem'
import Dot from './Dot'

const styles = {
  repo: {
    width: 640,
    marginBottom: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.LightGray,
    borderRadius: 3
  },
  description: {
    paddingTop: spacing.xSmall,
    color: colors.DarkGray
  },
  info: {
    flexDirection: 'row',
    paddingTop: spacing.xSmall
  },
  infoItem: {
    flexDirection: 'row',
    paddingRight: spacing.Small,
    color: colors.DarkGray
  }
}

const Repository = ({
  name,
  description,
  language,
  noStargazers,
  noForks
}) => (
  <View name={name} style={styles.repo}>
    <Text name='Name' style={typography.Lead}>
      {name}
    </Text>

    <Text name='Description' style={{...typography.Body, ...styles.description}}>
      {description}
    </Text>

    <View name='Info' style={styles.info}>
      <Text name='Language' style={{...typography.Body, ...styles.infoItem}}>
        <Dot width={20} borderColor={language.color} filled /> {language.name}
      </Text>

      {noStargazers > 0 && <Text name='Stargazers' style={{...typography.Body, ...styles.infoItem}}>
        {`⭑ ${noStargazers}`}
      </Text>}

      {noForks > 0 && <Text name='Forks' style={{...typography.Body, ...styles.infoItem}}>
        {`⑂ ${noForks}`}
      </Text>}
    </View>
  </View>
)

Repository.propTypes = {
  name: string.isRequired,
  description: string,
  language: shape({
    name: string,
    color: string
  }),
  noStargazers: number.isRequired,
  noForks: number.isRequired
}

export default Repository
