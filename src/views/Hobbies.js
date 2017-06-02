import React from 'react'
import { View } from 'react-sketchapp'
import { IMAGE_SERVER_URL, IMAGE_SERVER_PORT } from '../../config'
import { hobbies as hobbiesHeading } from '../../data/headings'
import hobbies from '../../data/hobbies'
import { getDataLocale } from '../utils'
import { Heading, Hobby } from '../components'

const IMG_ENDPOINT = `${IMAGE_SERVER_URL}:${IMAGE_SERVER_PORT}/`
const heading = getDataLocale(hobbiesHeading)
const hobbyList = getDataLocale(hobbies)

const style = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: 600
}

const Hobbies = () => (
  <View name='Hobbies' style={{ flex: 1 }}>
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
