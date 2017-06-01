import React from 'react'
import { array } from 'prop-types'
import { Artboard, View, StyleSheet } from 'react-sketchapp'
import { dimensions, spacing, colors } from '../designSystem'
import Header from './Header'
import Footer from './Footer'
import GitHub from './GitHub'
import Education from './Education'
import Experience from './Experience'
import Techs from './Techs'
import Hobbies from './Hobbies'
import Space from '../components/Space'

const styles = StyleSheet.create({
  artboard: {
    width: dimensions.docWidth,
    height: dimensions.docHeight,
    backgroundColor: colors.White
  },
  columnContainer: {
    flexDirection: 'row',
    paddingTop: spacing.Medium,
    paddingHorizontal: spacing.Large
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1
  }
})

const Resume = ({ githubRepos }) => (
  <Artboard name='Resume' style={styles.artboard}>
    <Header />

    <View style={styles.columnContainer}>
      <Education />
      <Experience />
    </View>

    <View style={styles.columnContainer}>
      <View style={styles.rowContainer}>
        <Techs />
        <Space height={spacing.Medium} />
        <Hobbies />
      </View>

      <GitHub repos={githubRepos} />
    </View>

    <Footer />
  </Artboard>
)

Resume.propTypes = {
  githubRepos: array.isRequired
}

export default Resume
