import React, { Fragment } from "react";
import Hog from "./Hog";
import hogs from "../porkers_data";

class HogContainer extends React.Component {

  state = {
    hogs: hogs,
    greased: false,
    nameSort: false,
    weightSort: false
  }

  filterHogs = () =>{
    if(this.state.greased === true){
      this.setState({
        hogs: hogs.filter(hog => {hog.greased === true})
      })
    }
  }

  filterButton = (name) =>{
    this.setState({
      [name] : true 
      // how do u do this
    })
  }

  // filterHogs = () =>{
  //   // if greased, filter hogs
  //   // if sortbyname, sort
  //   // greasedHogs.sort((a, b)=> (a.name > b.name) ? 1 : -1)
  //   // if sortbyweight, sort
  // }



  render() {

    return (
      <div className="ui grid container">
        <button 
          name = "greased" 
          onClick={this.filterButton("greased")} 
          id="greased-button">Greased?</button>
        <button 
          name = "nameSort"
          onClick={console.log('click')} 
          id="greased-button">Sort By Name</button>
        <button 
          name = "weightSort"
          onClick={console.log('click')}
          id="greased-button">Sort By Weight</button>
        {this.state.hogs.map(hog => 
        <Hog 
        {...hog}
        // name={hog.name}
        // specialty={hog.specialty}
        // greased={hog.greased}
        // weight={hog.weight}
        // highestMedal={hog}
        />)}
      </div>
    );
  }
}

export default HogContainer;
