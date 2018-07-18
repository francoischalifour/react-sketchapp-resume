import React from 'react'
import { string, number, shape } from 'prop-types'
import { Text, View } from 'react-sketchapp'
import { spacing, typography, colors } from '../designSystem'
import Dot from './Dot'

const styles = {
  repo: {
    width: 640,
    marginBottom: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.LightGray,
    borderRadius: 3,
  },
  description: {
    marginTop: spacing.xSmall,
    color: colors.DarkGray,
  },
  info: {
    flexDirection: 'row',
    marginTop: spacing.xSmall,
  },
  infoItem: {
    flexDirection: 'row',
    paddingRight: spacing.Small,
    color: colors.DarkGray,
  },
}

const Repository = ({ name, description, language, noStargazers, noForks }) => (
  <View name={name} style={styles.repo}>
    <Text name="Name" style={typography.Lead}>
      {name}
    </Text>

    <Text
      name="Description"
      style={{ ...typography.Body, ...styles.description }}
    >
      {description}
    </Text>

    <View name="Info" style={styles.info}>
      <View name="Language Color" style={{ paddingTop: 4, paddingRight: 8 }}>
        <Dot width={20} borderColor={language.color} filled />
      </View>

      <Text style={{ ...typography.Body, ...styles.infoItem, marginTop: 2 }}>
        {language.name}
      </Text>

      {noStargazers > 0 && (
        <Text
          name="Stargazers"
          style={{ ...typography.Body, ...styles.infoItem }}
        >
          {`⭑ ${noStargazers}`}
        </Text>
      )}

      {noForks > 0 && (
        <Text name="Forks" style={{ ...typography.Body, ...styles.infoItem }}>
          {`⑂ ${noForks}`}
        </Text>
      )}
    </View>
  </View>
)

Repository.propTypes = {
  name: string.isRequired,
  description: string,
  language: shape({
    name: string,
    color: string,
  }),
  noStargazers: number.isRequired,
  noForks: number.isRequired,
}

export default Repository
