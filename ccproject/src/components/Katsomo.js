import React, { Component } from 'react';
import { queryKatsomo } from '../queries/queryInterface.js';
import { getImage } from './OutlookHelper.js';
/*
 This Component displays search results from the Katsomo streaming service
*/
class Katsomo extends Component {
  constructor(props){
    super(props)
    this.state = {hidden:true}
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility(){
    this.setState({hidden:!this.state.hidden})
  }
  render(){
    let movies;
    /* 
      Decide if we need to show movies or not
    */
    if(this.props.sArg.searchQuery.length === 0){
      movies = []
    } else {
      movies = queryKatsomo().filter(movie => movie.Title.toLowerCase().indexOf(this.props.sArg.searchQuery.toLowerCase()) !== -1);
    }
    // Variables for dynamic outlook
    let size = movies.length;
    let chosen_icon = getImage(size)
    let top = {width:'60%', marginLeft:'auto', marginRight:'auto'};
    let col = {width:'50%', marginLeft:'auto', marginRight:'auto'};
    let results = this.state.hidden ? "w3-light-gray w3-hide w3-margin-top w3-margin-bottom w3-card-4 w3-round-large" : "w3-light-gray w3-margin-top w3-margin-bottom w3-card-4 w3-round-large";
    return(
      <div>
    <div onClick={this.toggleVisibility} className="w3-margin-top w3-margin-bottom w3-card-4 w3-round-large" style={top}>   
    <div className="w3-container w3-bar">
        	<h1 className="w3-bar-item ">Katsomo</h1>
    	<div className="w3-right w3-panel">
    	    <p className=" w3-bar-item ">{size !== undefined ? "Results: "+size : "Loading..."}</p>
    	    
            <img className={size === undefined ? "w3-spin" : ""}  src={chosen_icon} alt="status_icon" />
        </div>
    </div>
      </div>
      <div id="Katsomo" className={results} style={col}>
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

export default Katsomo;