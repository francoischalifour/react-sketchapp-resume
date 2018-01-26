import React from 'react'
import { string } from 'prop-types'
import { View, Text, Image, StyleSheet } from 'react-sketchapp'
import { typography, spacing } from '../designSystem'

const styles = {
  hobby: {
    justifyContent: 'center',
    marginBottom: spacing.Small,
    width: 151
  },
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100
  },
  name: {
    marginTop: spacing.xSmall,
    textAlign: 'center'
  }
}

const Hobby = ({ name, image }) => (
  <View name={name} style={styles.hobby}>
    <Image
      source={image}
      style={styles.image}
    />

    <Text style={{...typography.Lead, ...styles.name}}>
      {name}
    </Text>
  </View>
)

Hobby.propTypes = {
  name: string.isRequired,
  image: string.isRequired
}

export default Hobby
