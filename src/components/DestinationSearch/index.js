import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  SearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const SearchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="cont">
        <h1>Destination Search</h1>
        <div className="search-cont">
          <input
            placeholder="search"
            type="search"
            value={searchInput}
            onChange={this.SearchInputChange}
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
        <ul>
          {SearchResults.map(each => (
            <DestinationItem
              key={each.id}
              name={each.name}
              imgUrl={each.imgUrl}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
