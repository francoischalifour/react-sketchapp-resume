import React from 'react'
import { string, array, bool } from 'prop-types'
import { Text, View } from 'react-sketchapp'
import { spacing, typography, colors } from '../designSystem'
import VerticalLine from './VerticalLine'
import Dot from './Dot'

const styles = {
  container: {
    paddingVertical: spacing.Medium,
    paddingHorizontal: spacing.Large
  },
  eventContainer: {
    flexDirection: 'row'
  },
  eventDescription: {
    width: 600,
    color: colors.DarkGray
  },
  eventLeftArea: {
    marginLeft: -6, // align the vertical bar with the grid
    paddingRight: spacing.Small,
    alignItems: 'center',
    height: 116
  }
}

const Event = ({
  title,
  description,
  info,
  done,
  isFirst,
  isLast
}) => (
  <View name={title} style={styles.eventContainer}>
    <View name='Event Left' style={styles.eventLeftArea}>
      <VerticalLine
        width={3}
        color={isFirst ? colors.White : colors.LightGray}
      />
      <Dot
        width={24}
        borderColor={colors.LightGray}
        filled={done}
      />
      <VerticalLine
        height={4}
        width={3}
        borderStyle={isLast ? 'dotted' : 'solid'}
      />
    </View>

    <View name='Event Body'>
      <Text name='Event Info' style={typography.Small}>
        {info.join(' • ')}
      </Text>

      <Text name='Event Title' style={typography.Lead}>
        {title}
      </Text>

      <Text name='Event Description' style={{...typography.Body, ...styles.eventDescription}}>
        {description}
      </Text>
    </View>
  </View>
)

Event.propTypes = {
  title: string.isRequired,
  description: string,
  info: array,
  done: bool,
  isFirst: bool,
  isLast: bool
}

export default Event
