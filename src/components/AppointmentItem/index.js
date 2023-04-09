// Write your code here
import {Component} from 'react'
import './index.css'

class AppointmentItem extends Component {
  render() {
    const {eachList, onStarring} = this.props
    const {textInput, dateInput, isStar, id} = eachList

    const newStar = isStar
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

    const onAddingStar = () => {
      onStarring(id)
    }

    return (
      <li className="list-item">
        <div className="appont-container">
          <div className="chota-container">
            <h1 className="heading-text">{textInput}</h1>
            <button
              type="button"
              className="button-star"
              onClick={onAddingStar}
            >
              <img
                src={newStar}
                alt="star"
                className="image-star"
                data-testid="star"
              />
            </button>
          </div>
          <p>{dateInput}</p>
        </div>
      </li>
    )
  }
}

export default AppointmentItem
