import React from 'react'
import { View } from 'react-sketchapp'
import config from '../../config'
import headings from '../../data/headings'
import hobbies from '../../data/hobbies'
import { getDataLocale } from '../utils'
import Heading from '../components/Heading'
import Hobby from '../components/Hobby'
const IMG_ENDPOINT = `${config.IMAGE_SERVER_URL}:${config.IMAGE_SERVER_PORT}/`
const heading = getDataLocale(headings.hobbies)
const hobbyList = getDataLocale(hobbies)

const style = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: 600
}

const Hobbies = () => (
  <View name='Hobbies'>
    <Heading title={heading} />

    <View style={style}>
      {hobbyList.map((hobby, index) =>
        <Hobby
          key={index}
          name={hobby.name}
          image={`${IMG_ENDPOINT}${hobby.image}`}
        />
      )}
    </View>
  </View>
)

export default Hobbies
