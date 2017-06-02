import React from 'react'
import { View } from 'react-sketchapp'
import { MAX_TIMELINE_ITEMS } from '../../config'
import { education as educationHeading } from '../../data/headings'
import educationData from '../../data/education'
import { getDataLocale, formatDateInterval, sortByDate } from '../utils'
import { Heading, Event } from '../components'

const heading = getDataLocale(educationHeading)
const educationList = getDataLocale(educationData)

const Education = () => (
  <View name='Education' style={{ flex: 1 }}>
    <Heading title={heading} />

    {educationList
    .sort(sortByDate)
    .slice(0, MAX_TIMELINE_ITEMS)
    .map(({ name, diploma, location, started_at: start, ended_at: end }, index) => {
      const currentDate = new Date()
      const startDate = new Date(start)
      const endDate = new Date(end)
      const dateInterval = formatDateInterval(startDate.getFullYear(), endDate.getFullYear())

      const info = [
        location,
        dateInterval
      ].filter(x => x)

      return (
        <Event
          key={index}
          title={name}
          info={info}
          description={diploma}
          done={endDate < currentDate}
          isFirst={index === 0}
          isLast={index === (MAX_TIMELINE_ITEMS - 1)}
        />
      )
    })}
  </View>
)

export default Education
