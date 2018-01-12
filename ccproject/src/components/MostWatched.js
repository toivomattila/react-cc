import React, { Component } from 'react';
import { queryMostWatched } from '../queries/queryInterface.js';

//Page layout
class MostWatched extends Component {
  render() {
      if(this.props.sArg.searchQuery.length !== 0){
          return null;
      }
      let movies = queryMostWatched();
      
    let col = {width:'75%', marginLeft:'auto', marginRight:'auto'};
    let results = "w3-light-gray w3-margin-top w3-margin-bottom w3-card-4 w3-round-large";
    
    return (
        <div>
        <h2>Most Watched</h2>
      <div id="MostWatched" className={results} style={col}>
        <ul className="w3-ul w3-large">
        {movies.map(movie => <li style={{whiteSpace: 'initial'}} className="w3-button w3-block w3-left-align" key={movie.Position}> 
        <a href={movie.URL}>
        <h1>{movie.Title} ({movie.Year})</h1>
        <p>{movie.Genres}</p>
        <p>IMDb rating: {movie["IMDb Rating"]}</p>
        </a>
        </li>)}
		    </ul>
    </div>
    </div>
    );
  }
}

export default MostWatched;