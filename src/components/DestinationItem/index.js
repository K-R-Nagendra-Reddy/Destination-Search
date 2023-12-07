// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails
  return (
    <div>
      <li className="list-container">
        <img src={imgUrl} className="image" alt={name} />
        <p className="description">{name}</p>
      </li>
    </div>
  )
}
export default DestinationItem
