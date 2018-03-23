// it might be said:
import React, { Component } from 'react'
import Hours from './Hours'
import DaysOfTheWeek from './DaysOfTheWeek'

class OuterTable extends Component {
  render() {
    return (
      <table className="table table-responsive">
        <DaysOfTheWeek />
        <tbody>
          <Hours hour="8-9" />
          <Hours hour="9-10" />
          <Hours hour="10-11" />
          <Hours hour="11-12" />
          <Hours hour="12-1" />
          <Hours hour="1-2" />
          <Hours hour="2-3" />
          <Hours hour="4-5" />
          <Hours hour="5-6" />
          <Hours hour="6-7" />
          <Hours hour="7-8" />
          <Hours hour="8-9" />
          <Hours hour="9-10" />
          <Hours hour="10-11" />
          <Hours hour="11-12" />
        </tbody>
      </table>
    )
  }
}

export default OuterTable
