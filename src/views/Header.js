import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-sketchapp'
import { typography, spacing, colors } from '../designSystem'
import { getDataLocale, getAge } from '../utils'
import { IMAGE_SERVER_URL, IMAGE_SERVER_PORT } from '../../config'
import about from '../../data/about'

const IMG_ENDPOINT = `${IMAGE_SERVER_URL}:${IMAGE_SERVER_PORT}/`

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: colors.Primary,
    height: 480,
    paddingVertical: spacing.Medium * 1.5,
    paddingHorizontal: spacing.Large
  },
  title: {
    height: 140
  },
  info: {
    ...typography.Body,
    color: colors.White,
    paddingBottom: 8
  },
  right: {
    alignItems: 'flex-end',
    textAlign: 'right'
  },
  iconContainer: {
    flexDirection: 'row'
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12
  }
})

const {
  name,
  description,
  birthdate,
  birthdate_text: birthdateText,
  location,
  phone,
  email,
  website,
  social
} = getDataLocale(about)

const age = `${getAge(birthdate)} ${birthdateText}`

const Header = () => (
  <View name='Header' style={styles.container}>
    <View name='Left Panel'>
      <View name='Twitter' style={styles.iconContainer}>
        <Image source={`${IMG_ENDPOINT}twitter.png`} style={styles.icon} />
        <Text style={styles.info}>{`@${social.twitter}`}</Text>
      </View>

      <View name='GitHub' style={styles.iconContainer}>
        <Image source={`${IMG_ENDPOINT}github.png`} style={styles.icon} />
        <Text style={styles.info}>{`@${social.github}`}</Text>
      </View>

      <View name='Website' style={styles.iconContainer}>
        <Image source={`${IMG_ENDPOINT}home.png`} style={styles.icon} />
        <Text style={styles.info}>{`${website}`}</Text>
      </View>

      <View name='Title' style={styles.title}>
        <Text style={typography.Title}>{name.toUpperCase()}</Text>
        <Text style={typography.Subtitle}>{description}</Text>
      </View>
    </View>

    <View name='Right Panel' style={styles.right}>
      {[age, location, phone, email].map((text, index) =>
        <Text key={index} style={styles.info}>{text}</Text>
      )}

      <View style={styles.title} />
    </View>
  </View>
)

export default Header
