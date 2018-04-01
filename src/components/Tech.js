import React from 'react'
import { string } from 'prop-types'
import { Text, View } from 'react-sketchapp'
import { typography, spacing, colors } from '../designSystem'

const style = {
  paddingHorizontal: spacing.xSmall,
  marginRight: 16,
  marginBottom: 16,
  paddingVertical: 12,

  backgroundColor: colors.LightBlue,
  borderRadius: 3,
}

const Tech = ({ name }) => (
  <View style={style}>
    <Text style={{ color: colors.PrimaryLight, ...typography.Body }}>
      {name.toLowerCase()}
    </Text>
  </View>
)

Tech.propTypes = {
  name: string.isRequired,
}

export default Tech
