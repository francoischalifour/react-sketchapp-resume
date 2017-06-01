import React from 'react'
import { string } from 'prop-types'
import { Text } from 'react-sketchapp'
import { typography, colors } from '../designSystem'

const Code = ({
  type,
  content
}) => (
  <Text style={{
    ...typography.Code,
    color: (type === 'error') ? colors.Error : colors.DarkGray,
    backgroundColor: colors.ExtraLightGray,
    padding: 12,
    borderRadius: 3
  }}>
    {content}
  </Text>
)

Code.propTypes = {
  type: string.isRequired,
  content: string.isRequired
}

export default Code
