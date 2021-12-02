import React from "react";
import './App.css';
import Header from "./components/Header";
import Jokes from "./components/Jokes";


class App extends React.Component{
  render(){
    return(
        <div className="container">
          <Header />
          <Jokes />
        </div>
    )
  }
}

export default App;
