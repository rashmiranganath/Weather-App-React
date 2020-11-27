import React from "react";
import LoaderGif from "./loader";
const loaderFunc = (CountryWeather, message ) => {
  console.log(message);
  class Loader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    setLoadingState = (value ) => {
      this.setState({ isLoading: value });
    };

    render() {
      const { isLoading } = this.state;
      return (
        <div>
          {isLoading && <LoaderGif />}
          <CountryWeather {...this.props} isLoading={this.setLoadingState} loading={isLoading} />
        </div>
      );
    }
  }
  return Loader;
};

export default loaderFunc;
