import React, { Component } from "react";
import { Redirect } from "react-router";
import "../styles/weather.css";

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      // searchValue: "",
      // buttonClicked: false,
    };
  }

  

  changeRoute = () => {
    this.setState({
      buttonClicked: true,
    });
  };

  renderRedirect = (searchValue) => {
    console.log(this.state.buttonClicked);
    console.log("hei");
    if (this.state.buttonClicked) {
      return <Redirect to={`/${searchValue}`}/>;
    } else {
      return <Redirect to="/" />;
    }
  };

  updateInput = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  searchBar = () => {
    const { searchValue } = this.state;

    return (
      <div className="weatherApp">
        <div className="searchBar">
          <div className="imgDiv">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuN7RlE7r6zu-E39J9rmMS75tHWRgKUlo8ow&usqp=CAU"></img>
          </div>
          <div className="title">
            <span>
              The Weather App
            </span>
          </div>
          <div className="weatherSearch">
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter city name"
                value={this.state.username}
                onChange={(e) => {
                  this.updateInput(e.target.value);
                }}
              ></input>
            </div>
            <div className="submitButton">
              <button
                type="submit"
                onClick={() => {
                  this.changeRoute();
                }}
              >
                search
              </button>
              {this.renderRedirect(searchValue)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div className="mainDiv">{this.searchBar()}</div>;
  }
}


