// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

import './index.css'

// console.log(format(new Date(2021, 19, 07), 'dd MMMM yyyy, EEEE'))
const intitilialList = []

class Appointments extends Component {
  state = {
    AppointmentList: intitilialList,
    Title: '',
    DateValue: '',
    isTrue: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {Title, DateValue} = this.state
    const newAppointment = {
      id: uuidv4(),
      Title,
      DateValue,
      isFavorite: false,
    }

    this.setState(prev => ({
      AppointmentList: [...prev.AppointmentList, newAppointment],
      Title: '',
      DateValue: '',
    }))
  }

  titleName = event => {
    this.setState({Title: event.target.value})
  }

  dateFunction = event => {
    const d = new Date(event.target.value)
    const year = d.getFullYear()
    const month = d.getMonth()
    const day = d.getDay()
    console.log(format(new Date(year, day, month), 'dd MMMM yyyy, EEEE'))
    const farmateDate = format(new Date(year, day, month), 'dd MMMM yyyy, EEEE')
    this.setState({DateValue: farmateDate})
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      AppointmentList: prevState.AppointmentList.map(eachContact => {
        if (id === eachContact.id) {
          //   eachContact.isFavorite = !eachContact.isFavorite
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  filterAppointment = () => {
    const {isTrue} = this.state

    if (isTrue) {
      this.setState({isTrue: false})
    } else {
      this.setState({isTrue: true})
    }
  }

  render() {
    let {AppointmentList} = this.state
    const {isTrue} = this.state
    console.log(AppointmentList)

    if (isTrue) {
      const newList = AppointmentList.filter(x => x.isFavorite === false)
      AppointmentList = newList
    }

    return (
      <div className="main-bg">
        <div className="white-bg">
          <div className="info-bg">
            <div>
              <h1>Add Appointments</h1>
              <form onSubmit={this.onAddAppointment}>
                <label htmlFor="titelId">Title</label>
                <br />
                <input
                  id="titelId"
                  placeholder="Title"
                  onChange={this.titleName}
                />
                <br />
                <label htmlFor="dateId">Date</label>
                <br />
                <input
                  id="dateId"
                  type="date"
                  placeholder="Date"
                  onChange={this.dateFunction}
                />
                <br />
                <button type="submit">Add</button>
              </form>
            </div>

            <div>
              <img
                alt="appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="bellow-bg">
            <h1>Appointments</h1>
            <div>
              {isTrue ? (
                <button onClick={this.filterAppointment} type="button">
                  Starred
                </button>
              ) : (
                <button onClick={this.filterAppointment} type="button">
                  Starred
                </button>
              )}
            </div>
          </div>
          <div>
            <ul>
              {AppointmentList.map(x => (
                <AppointmentItem
                  id={x.id}
                  key={x.id}
                  isFavorite={x.isFavorite}
                  Title={x.Title}
                  DateValue={x.DateValue}
                  toggleIsFavorite={this.toggleIsFavorite}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
