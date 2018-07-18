import React from 'react'
import { Text, View, Svg } from 'react-sketchapp'
import about from '../../data/about'
import { getDataLocale, getAge } from '../utils'
import { typography, spacing, colors, dimensions } from '../designSystem'
import TwitterSvg from '../components/TwitterSvg'
import GitHubSvg from '../components/GitHubSvg'
import WebsiteSvg from '../components/WebsiteSvg'

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: colors.Primary,
    height: 450,
    paddingVertical: spacing.Medium * 1.5,
    paddingHorizontal: spacing.Large,
  },
  title: {
    height: 140,
  },
  info: {
    ...typography.Body,
    color: colors.White,
    paddingBottom: 8,
    marginLeft: 12,
  },
  right: {
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  iconContainer: {
    flexDirection: 'row',
  },
}

const {
  name,
  description,
  birthdate,
  birthdate_text: birthdateText,
  location,
  phone,
  email,
  website,
  social,
} = getDataLocale(about)

const age = `${getAge(birthdate)} ${birthdateText}`

const Header = () => (
  <View name="Header" style={styles.container}>
    <Svg
      width={dimensions.docWidth}
      height={490}
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <Svg.Defs>
        <Svg.LinearGradient id="gradient">
          <Svg.Stop offset="0%" style={`stop-color: ${colors.PrimaryDark};`} />
          <Svg.Stop
            offset="100%"
            style={`stop-color: ${colors.PrimaryLight};`}
          />
        </Svg.LinearGradient>
      </Svg.Defs>
      <Svg.G>
        <Svg.Path fill={'url(#gradient)'} d={`M0 0 L0 520 1 480 1 0 0 0`} />
      </Svg.G>
    </Svg>

    <View name="Left Panel">
      <View name="Twitter" style={styles.iconContainer}>
        <TwitterSvg />
        <Text style={styles.info}>{`@${social.twitter}`}</Text>
      </View>

      <View name="GitHub" style={styles.iconContainer}>
        <GitHubSvg />
        <Text style={styles.info}>{`@${social.github}`}</Text>
      </View>

      <View name="Website" style={styles.iconContainer}>
        <WebsiteSvg />
        <Text style={styles.info}>{`${website}`}</Text>
      </View>

      <View name="Title" style={styles.title}>
        <Text style={typography.Title}>{name.toUpperCase()}</Text>
        <Text style={typography.Subtitle}>{description}</Text>
      </View>
    </View>

    <View name="Right Panel" style={styles.right}>
      {[age, location, phone, email].map((text, index) => (
        <Text key={index} style={styles.info}>
          {text}
        </Text>
      ))}
    </View>
  </View>
)

export default Header
