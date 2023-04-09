// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    textInput: '',
    dateInput: '',
    appointmentList: [],
  }

  onGettingStarList = () => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.filter(eachList => {
        if (eachList.isStar === true) {
          return eachList
        }
        return eachList
      }),
    }))
  }

  onStarring = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachList => {
        if (id === eachList.id) {
          return {...eachList, isStar: !eachList.isStar}
        }
        return eachList
      }),
    }))
  }

  renderTheList = () => {
    const {appointmentList} = this.state

    return appointmentList.map(eachList => (
      <AppointmentItem
        eachList={eachList}
        key={eachList.id}
        onStarring={this.onStarring}
      />
    ))
  }

  onSubmitting = event => {
    event.preventDefault()
    const {textInput, dateInput} = this.state

    const newAppointment = {
      id: v4(),
      textInput,
      dateInput,
      isStar: true,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      textInput: '',
      dateInput: '',
    }))
  }

  onChangeText = event => {
    // console.log(event.target.value)
    this.setState({textInput: event.target.value})
  }

  onChangeDate = event => {
    this.setState({dateInput: event.target.value})
  }

  render() {
    const {dateInput, textInput} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Add Appointment</h1>
          <div className="combine-container">
            <form onSubmit={this.onSubmitting}>
              <div className="first-input">
                <label htmlFor="text" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="text"
                  placeholder="Title"
                  onChange={this.onChangeText}
                  value={textInput}
                />
              </div>
              <div className="first-input">
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <input
                  type="date"
                  id="date"
                  placeholder="dd/mm/yyyy"
                  onChange={this.onChangeDate}
                  value={dateInput}
                />
              </div>
              <button className="button" type="submit">
                Add
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="line" />
          <div className="bottom-container">
            <h1 className="appointment-text">Appointments</h1>
            <button
              className="star-button"
              type="button"
              onClick={this.onGettingStarList}
            >
              Starred
            </button>
          </div>
          <ul className="list">{this.renderTheList()}</ul>
        </div>
      </div>
    )
  }
}

export default Appointments
