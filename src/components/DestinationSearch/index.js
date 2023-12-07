// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {inputSearch: ''}

  onChangeSearchDestination = event => {
    const searched = event.target.value

    this.setState({inputSearch: searched})
  }

  render() {
    const {destinationsList} = this.props
    const {inputSearch} = this.state
    const FilteredDestinations = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(inputSearch),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div>
          <input
            type="search"
            value={inputSearch}
            onChange={this.onChangeSearchDestination}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
            alt="search icon"
          />
        </div>
        <div className="destinations-card">
          <ul className="destinations-list">
            {FilteredDestinations.map(eachPlace => (
              <DestinationItem key={eachPlace.id} placeDetails={eachPlace} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
