import React from 'react'
import { View } from 'react-sketchapp'
import headings from '../../data/headings'
import techData from '../../data/techs'
import { getDataLocale } from '../utils'
import Heading from '../components/Heading'
import Tech from '../components/Tech'
const heading = getDataLocale(headings.techs)
const techList = getDataLocale(techData)

const style = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: 600,
  maxHeight: 355,
}

const Techs = () => (
  <View name="Techs">
    <Heading title={heading} />

    <View style={style}>
      {techList
        .sort()
        .map((techName, index) => <Tech key={index} name={techName} />)}
    </View>
  </View>
)

export default Techs
