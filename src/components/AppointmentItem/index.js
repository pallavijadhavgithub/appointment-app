// Write your code here
import {Component} from 'react'
import './index.css'

class AppointmentItem extends Component {
  render() {
    const {eachList} = this.props
    const {text, date} = eachList
    return (
      <li>
        <div className="appont-container">
          <h1>{text}</h1>
          <p>{date}</p>
        </div>
      </li>
    )
  }
}

export default AppointmentItem
