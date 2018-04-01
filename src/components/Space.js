import React from 'react'
import { number } from 'prop-types'
import { View } from 'react-sketchapp'

const Space = ({ width = 0, height = 0 }) => (
  <View
    name="Space"
    style={{
      width,
      height,
    }}
  />
)

Space.propTypes = {
  width: number,
  height: number,
}

export default Space
