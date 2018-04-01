import React from 'react'
import { array } from 'prop-types'
import Shape from './Shape'

const Dot = props => <Shape {...props} name="Dot" borderRadius={100} />

Dot.propTypes = {
  props: array,
}

export default Dot
