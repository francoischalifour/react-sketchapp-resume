import React from 'react'
import { string } from 'prop-types'
import { Text } from 'react-sketchapp'
import { typography, spacing, colors } from '../designSystem'

const style = {
  paddingHorizontal: spacing.xSmall,
  marginRight: 16,
  marginBottom: 16,
  paddingVertical: 12,
  color: colors.PrimaryLight,
  backgroundColor: colors.LightBlue,
  borderRadius: 3
}

const Tech = ({ name }) => (
  <Text style={[typography.Body, style]}>
    {name.toLowerCase()}
  </Text>
)

Tech.propTypes = {
  name: string.isRequired
}

export default Tech
