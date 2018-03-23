// it might be said:
import React, { Component } from 'react'

class DaysOfTheWeek extends Component {
  // it might be said:
  _getDays() {
    const daysOfTheWeek = [
      { id: 1, day: 'Sunday' },
      { id: 2, day: 'Monday' },
      { id: 3, day: 'Tuesday' },
      { id: 4, day: 'Wednesday' },
      { id: 5, day: 'Thursday' },
      { id: 6, day: 'Friday' },
      { id: 7, day: 'Saturday' }
    ]

    return daysOfTheWeek.map(elem => {
      return <th key="{elem.id }">${elem.day}</th>
    })
  }
  render() {
    const days = this._getDays()
    return (
      <tr>
        <th>Hour / Day</th>
      </tr>
    )
  }
}

export default DaysOfTheWeek
