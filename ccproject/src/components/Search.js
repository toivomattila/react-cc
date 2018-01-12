import React, { Component } from 'react';
import Yle from './Yle';
import Katsomo from './Katsomo';
import Ruutu from './Ruutu';
import Ohjelmat from './Ohjelmat'
import MostWatched from './MostWatched'
class Search extends Component{
  constructor(props){
    super(props);
    this.state = { searchQuery: "" , searchField: ""};
    this.searchBarChange = this.searchBarChange.bind(this);
    this.search = this.search.bind(this);
    this.enterHit = this.enterHit.bind(this);
  }
  searchBarChange(evt){
    this.setState({ searchField: evt.target.value});
  }
  enterHit(evt){
    if(evt.key === 'Enter'){
      this.search();
    }
  }
  search(){
    this.setState({ searchQuery: this.state.searchField});
  }
  render(){
    let first;
    this.state.searchQuery.length === 0 ? first="w3-hide" : first="";
    return (
      <div className="w3-container">
        <div className="w3-center">
        <input placeholder="Search by typing here" className="w3-input w3-border w3-margin-bottom w3-margin-top" type="text" onKeyUp={this.enterHit} onChange={this.searchBarChange} value={this.state.searchField} />
        <button onClick={this.search} className="w3-button">
        <img src="http://www.iconsplace.com/icons/preview/black/google-web-search-64.png" alt="search_img" />
        </button>
        <MostWatched sArg = {this.state}/>
        </div>
        <div className={first}>
        <Ohjelmat sArg = {this.state}/>
        <Yle sArg = {this.state}/>
        <Katsomo sArg = {this.state}/>
        <Ruutu sArg = {this.state}/>
        </div>
      </div>
      )
  }
}

export default Search;