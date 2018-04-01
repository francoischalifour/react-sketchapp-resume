import React from 'react'
import { Text, View, Image, Svg } from 'react-sketchapp'
import config from '../../config'
import about from '../../data/about'
import { getDataLocale, getAge } from '../utils'
import { typography, spacing, colors, dimensions } from '../designSystem'

const IMG_ENDPOINT = `${config.IMAGE_SERVER_URL}:${config.IMAGE_SERVER_PORT}/`

const styles = {
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
        <Text key={index} style={styles.info}>{text + ''}</Text>
      )}

      <View style={styles.title} />
    </View>
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={dimensions.docWidth}
      height='520'
      viewBox={`0 0 1 520`}
      style={{
        position: 'absolute',
        top: 0
      }}
      >
      <Svg.Defs>
        <Svg.LinearGradient id='grad2' x1='0%' y1='0%' x2='100%' y2='0%'>
          <Svg.Stop offset='0%' style='stop-color:#030F4E;stop-opacity:1' />
          <Svg.Stop offset='100%' style='stop-color:#28ABD4;stop-opacity:1' />
        </Svg.LinearGradient>
      </Svg.Defs>
      <Svg.G fill='none' fillRule='evenodd'>
        <Svg.Path
          fill={'url(#grad2)' || colors.Primary}
          d={`M0 0 L0 520 1 480 1 0 0 0`}
        />
      </Svg.G>
    </Svg>
  </View>
)

export default Header
