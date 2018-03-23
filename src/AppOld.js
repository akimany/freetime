
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

class OuterTable extends Component {
  render() {
    return (
      <table className="table table-responsive">
        <thead>
          <DaysOfTheWeek />
        </thead>
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
      return <th key="{ elem.id }">{elem.day}</th>
    })
  }
  render() {
    const days = _getDays()
    return (
      <tr>
        <th>Day / Hours</th>
      </tr>
    )
  }
}

class Hours extends Component {
  render() {
    return (
      <tr>
        <td> {this.props.hour} </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
    )
  }
}

export default App
