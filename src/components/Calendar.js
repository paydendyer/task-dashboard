import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
      plugins={[ dayGridPlugin ]}
      intialView="dayGridMonth"
      weekends={false}
    events={[
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' }
    ]}
      />
    )
  }
}