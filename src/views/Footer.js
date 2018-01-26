import React from 'react'
import { Text, View, Svg } from 'react-sketchapp'
import about from '../../data/about'
import { dimensions, typography, spacing, colors } from '../designSystem'

const styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    width: dimensions.docWidth,
    height: 200,
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
      xmlns='http://www.w3.org/2000/svg'
      width={dimensions.docWidth}
      height='240'
      viewBox={`0 0 1 240`}
      style={{
        position: 'absolute',
        bottom: 0
      }}
      >
      <Svg.Defs>
        <Svg.LinearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0%'>
          <Svg.Stop offset='0%' style='stop-color:#030F4E;stop-opacity:1' />
          <Svg.Stop offset='100%' style='stop-color:#28ABD4;stop-opacity:1' />
        </Svg.LinearGradient>
      </Svg.Defs>
      <Svg.G fill='none' fillRule='evenodd'>
        <Svg.Path
          fill={'url(#grad1)' || colors.Primary}
          d={`M0 40 L0 220 1 220 1 0 0 40`}
        />
      </Svg.G>
    </Svg>
  </View>
)

export default Footer
