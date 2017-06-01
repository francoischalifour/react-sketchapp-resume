import React from 'react'
import { string } from 'prop-types'
import { Text } from 'react-sketchapp'
import { typography } from '../designSystem'

const Heading = ({ title }) =>
  <Text style={typography.Heading}>{title}</Text>

Heading.propTypes = {
  title: string.isRequired
}

export default Heading
