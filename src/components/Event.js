import React from 'react'
import { string, array, bool } from 'prop-types'
import { Text, View, Svg } from 'react-sketchapp'
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
      {isLast ? (
        <View style={{flex: 4, width: 3}}>
          <Svg
            width={3}
            style={{
              position: 'absolute',
              height: '100%',
              top: 0
            }}
          >
            <Svg.Defs>
              <Svg.LinearGradient id='gradient' x1='100%' y1='0%' x2='100%' y2='100%'>
                <Svg.Stop offset='0%' style={`stop-color: ${colors.LightGray};`} />
                <Svg.Stop offset='100%' style={`stop-color: #fff;`} />
              </Svg.LinearGradient>
            </Svg.Defs>
            <Svg.G>
              <Svg.Path
                fill={'url(#gradient)'}
                d={`M0 0 L0 480 1 480 1 0 0 0`}
              />
            </Svg.G>
          </Svg>
        </View>
      ) : (
        <VerticalLine
          height={4}
          width={3}
        />
      )}
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
