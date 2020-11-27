import React from "react";
import { getData } from "../service/service";
import "../styles/countryWeather.css";
import loaderFunc from "../components/loaderHOC";

export class CountryWeather extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      getData: [],
      getDataLoaded: false,
      hasError: false,
      
    };
  }

  componentDidMount = async () => {
    const countryname = this.props.match.params.countryname;
    this.props.isLoading(true);
    const data = (await this.props.isLoading)
      ? this.searchValueHandler(countryname)
      : "";
    this.props.isLoading(false);
    return data;
  };

  // searchValueHandler = async (searchValue) => {
  //   console.log(searchValue);
  //   const data = await getData(searchValue);
  //   console.log(data);
  //   this.setState({
  //     getData: data.data,
  //     getDataLoaded: true,
  //   });
  //   this.props.isLoading(false);

  // };

  searchValueHandler = async (searchValue) => {
    this.props.isLoading(true);
    console.log(searchValue);
    try {
      const data = await getData(searchValue);
      console.log(data);
      this.setState({
        getData: data.data,
        getDataLoaded: true,
      });
      this.props.isLoading(false);
    } catch (err) {
      this.props.isLoading(false);
      this.setState({
        hasError: true,
      });
    }
  };

  renderWeatherData = () => {
    console.log("no error");
    const { getData } = this.state;
    if(this.props.loading){
      return " "
    }
    return (
      <div className="mainData">
        <div className="countryCount">
          <span>Countries result : {getData.length}</span>
        </div>
        {getData.map((item) => {
          return (
            <div className="countryDeatils">
              <div className="subDiv">
                <div className="countryName"> {item.name}</div>
              </div>
              <div className="flagDetails">
                <div className="flag">
                  <img src={item.flag}></img>
                </div>
                <div className="infoDetails">
                  <div className="capital">
                    <span>capital : </span>
                    {item.capital}
                  </div>
                  <div className="countryPopulation">
                    <span>population : </span>
                    {item.population}
                  </div>
                  <div className="countryRegion">
                    <span>region : </span>
                    {item.region}
                  </div>
                  <div className="latLng">
                    <span>latlng : </span>
                    {item.latlng}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  renderErrorPage = () => {
    console.log("error");
    return (
      <div className="errorPage">
        <span>
          <img src="https://i.pinimg.com/originals/4a/f7/9c/4af79caa2f82ef31fe5c5a3dfb2478dd.jpg"></img>
        </span>
        <h3>Sorry</h3>
        <h1>No countries found by this name !</h1>
      </div>
    );
  };

  render() {
    return (
      <div className="weatherDataDiv">
        {!this.state.hasError
          ? this.renderWeatherData()
          : this.renderErrorPage()}
      </div>
    );
  }
}

export default loaderFunc(CountryWeather, "message");
