// it might be said:
import React, { Component } from 'react'
import DaysOfTheWeek from './DaysOfTheWeek'
import OuterTable from './OuterTable'

class App extends Component {
  render() {
    return (
      <div className="freeTime container">
        <div className="row">
          <OuterTable />
        </div>
      </div>
    )
  }
}

export default App
