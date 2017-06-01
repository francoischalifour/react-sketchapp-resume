import React from 'react'
import { string, number } from 'prop-types'
import { View } from 'react-sketchapp'
import { colors } from '../designSystem'

const VerticalLine = ({
  width = 1,
  height = 1,
  borderStyle = 'solid',
  color = colors.LightGray
}) => (
  <View
    style={{
      flex: height,
      borderStyle,
      borderWidth: width / 2,
      borderColor: color
    }}
  />
)

VerticalLine.propTypes = {
  width: number,
  height: number,
  borderStyle: string,
  color: string
}

export default VerticalLine
