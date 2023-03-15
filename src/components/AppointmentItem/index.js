// Write your code here
import './index.css'

export default function AppointmentItem(props) {
  const {Title, DateValue, id, toggleIsFavorite, isFavorite} = props

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }
  return (
    <li className="appiontment-item">
      <div className="name">
        <p>{Title}</p>
        <p>Date: {DateValue}</p>
      </div>
      <div>
        <button type="button" onClick={onClickFavoriteIcon}>
          <img alt="star" src={starImgUrl} />
        </button>
      </div>
    </li>
  )
}
