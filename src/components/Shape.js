import React from 'react'
import { string, number, bool } from 'prop-types'
import { View } from 'react-sketchapp'
import { colors } from '../designSystem'

const Shape = ({
  name = 'Shape',
  width = 24,
  height = width,
  borderRadius = 0,
  borderWidth = 2,
  borderColor = colors.LightGray,
  backgroundColor,
  filled
}) => (
  <View name={name} style={{
    width,
    height,
    borderRadius,
    borderWidth,
    borderColor,
    backgroundColor: filled ? borderColor : backgroundColor
  }} />
)

Shape.propTypes = {
  name: string,
  width: number,
  height: number,
  borderRadius: number,
  borderWidth: number,
  borderColor: string,
  backgroundColor: string,
  filled: bool
}

export default Shape
