import React from 'react'
import { View } from 'react-sketchapp'
import { techs as techHeading } from '../../data/headings'
import techData from '../../data/techs'
import { getDataLocale } from '../utils'
import { Heading, Tech } from '../components'

const heading = getDataLocale(techHeading)
const techList = getDataLocale(techData)

const style = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: 600,
  maxHeight: 355
}

const Techs = () => (
  <View name='Techs' style={{ flex: 1 }}>
    <Heading title={heading} />

    <View style={style}>
      {techList.sort().map((techName, index) =>
        <Tech
          key={index}
          name={techName}
        />
      )}
    </View>
  </View>
)

export default Techs
