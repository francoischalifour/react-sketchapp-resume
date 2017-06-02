import React from 'react'
import { Text, View, StyleSheet } from 'react-sketchapp'
import { website } from '../../data/about'
import { dimensions, typography, spacing, colors } from '../designSystem'

const styles = StyleSheet.create({
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
    ...typography.Lead,
    lineHeight: 20,
    paddingVertical: spacing.xSmall * 1.5,
    paddingHorizontal: spacing.Small,
    color: colors.Primary,
    backgroundColor: colors.White,
    borderRadius: 100,
    shadowColor: 'rgba(0,0,0,.50)',
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4
    }
  }
})

const Footer = () => (
  <View name='Footer' style={styles.container}>
    <Text style={styles.info}>
      {website}
    </Text>
  </View>
)

export default Footer
