import React, { Component } from 'react';
// import React from 'react';

class Hog extends React.Component{

    state={
        details: false
    }

    showDetails = () =>{
        this.setState({
            details: true
        })
    }
    render(){
        return ( 
            <div className="pigTile" onClick={this.showDetails}>
                <p>Name: {this.props.name}</p>
                {/* style={{display: this.state.showStore ? 'block' : 'none' }} */}
                <div style={{display: this.state.details ? "block" : "none"}}>
                    <p>Weight: {this.props.weight}</p>
                    <p>Specialty: {this.props.specialty}</p>
                    <p>Greased: {this.props.greased ? "Yes": "No"}</p>
                    <p>Highest Medal Achieved: {this.props["highest medal achieved"]}</p>
                </div>
            </div>
         );
    }
    
}
 
export default Hog;