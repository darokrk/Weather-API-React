import React, { Component } from "react";
import "./App.scss";
import Form from "./Form";
import Result from "./Result";

const APIkey = "f898e87d753c1e5de2cf49473bed40c5";

class App extends Component {
  state = {
    value: "",
    img: "",
    name: "",
    country: "",
    weather: "",
    temp: "",
    sunrise: "",
    sunset: "",
    pressure: "",
    humidity: "",
    wind: "",
    coords: "",
    error: false
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${
      this.state.value
    }&units=metric&APPID=${APIkey}`;
    if (this.state.value.length > 0) {
      fetch(URL)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then(response => response.json())
        .then(data => {
          const { sys, weather, main, wind, coord } = data;
          this.setState(prevState => ({
            img: weather[0].icon,
            name: prevState.value,
            country: sys.country,
            weather: weather[0].description,
            temp: main.temp,
            sunrise: sys.sunrise,
            sunset: sys.sunset,
            pressure: main.pressure,
            humidity: main.humidity,
            wind: wind.speed,
            coords: coord,
            error: false
          }));
        })
        .catch(err => {
          console.log(`${err} something goes wrong :(`);
          this.setState(prevState => ({
            error: true,
            name: prevState.value
          }));
        });
    } else return alert("Please insert city name first");
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value === this.state.value) {
      this.setState({
        value: ""
      });
    } else return;
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <Form
            submit={this.handleCitySubmit}
            search={this.handleInputChange}
            value={this.state.value}
          />
          <Result data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
