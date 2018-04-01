import React from 'react'
import { Text, View, Svg } from 'react-sketchapp'
import about from '../../data/about'
import { dimensions, typography, spacing, colors } from '../designSystem'

const styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    width: dimensions.docWidth,
    height: 160,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: spacing.Medium,
    backgroundColor: colors.Primary
  },
  info: {
    lineHeight: 20,
    paddingVertical: spacing.xSmall * 1.5,
    paddingHorizontal: spacing.Small,
    backgroundColor: colors.White,
    borderRadius: 100,
    shadowColor: 'rgba(0,0,0,.50)',
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4
    }
  }
}

const Footer = () => (
  <View name='Footer' style={styles.container}>

    <View style={styles.info}>
      <Text style={{
        ...typography.Lead,
        color: colors.Primary
      }}>
        {about.website}
      </Text>
    </View>

    <Svg
      width={dimensions.docWidth}
      height={200}
      viewBox={`0 0 1 200`}
      style={{
        position: 'absolute',
        bottom: 0
      }}
      >
      <Svg.Defs>
        <Svg.LinearGradient id='gradient'>
          <Svg.Stop offset='0%' style={`stop-color: ${colors.PrimaryDark};`} />
          <Svg.Stop offset='100%' style={`stop-color: ${colors.PrimaryLight};`} />
        </Svg.LinearGradient>
      </Svg.Defs>
      <Svg.G>
        <Svg.Path
          fill={'url(#gradient)' || colors.Primary}
          d={`M0 40 L0 220 1 220 1 0 0 40`}
        />
      </Svg.G>
    </Svg>
  </View>
)

export default Footer
