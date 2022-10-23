import React from 'react'
import AllMovies from './AllMovies'

export default class MoviesPanel extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      genre: 'All',
      movies: { AllMovies }
    }
  }

  handleGenreRadioButton (value) {
    this.setState({
      genre: value
    })
  }

  render () {
    const filteredMovies = AllMovies.filter((movie) => this.state.genre === 'All' || movie.genre === this.state.genre)
      .map((movie) => <li key={movie.id}>{movie.title}</li>)
    return (

            <div>
                <div id="genreToggle">
                    <input type="radio" checked={this.state.genre === 'All'} onChange={() => this.handleGenreRadioButton('All')} /> All
                    <input type="radio" checked={this.state.genre === 'Documentary'} onChange={() => this.handleGenreRadioButton('Documentary')} /> Documentary
                    <input type="radio" checked={this.state.genre === 'Comedy'} onChange={() => this.handleGenreRadioButton('Comedy')} /> Comedy
                    <input type="radio" checked={this.state.genre === 'Horror'} onChange={() => this.handleGenreRadioButton('Horror')} /> Horror
                    <input type="radio" checked={this.state.genre === 'Crime'} onChange={() => this.handleGenreRadioButton('Crime')} /> Crime
                </div>
                <div>
                    <ul>
                        {filteredMovies}
                    </ul>
                </div>
            </div>
    )
  }
}
