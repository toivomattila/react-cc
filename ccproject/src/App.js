import React, { Component } from 'react';
import './css/w3.css';
import mainLogo from'./img/title.png';
import Search from './components/Search';

//Page layout
class App extends Component {
  componentDidMount(){
    document.title = "OneStopFlicks - Search availability of movies";
  }
  render() {
    return (
      <div className="">
        <header className="w3-center">
          <img src={mainLogo} alt="title_image" />
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
