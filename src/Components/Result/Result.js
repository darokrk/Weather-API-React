import React from "react";
import "./Result.scss";

const Result = props => {
  const {
    img,
    name,
    country,
    weather,
    temp,
    sunrise,
    sunset,
    pressure,
    humidity,
    wind,
    coords,
    error
  } = props.data;

  let content = null;

  if (!error && name) {
    const tempFloor = Math.floor(temp);
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <>
        <div className="icon__wrapper">
          <img
            className="icon__img"
            src={`https://openweathermap.org/img/w/${img}.png`}
            alt=""
          />
        </div>
        <div className="content__wrapper">
          <p className="city__info">
            {name}, {country}
            <span className="city__info--italic"> {weather}</span>
          </p>
          <p className="weather__info">
            <span className="weather__info--bg">{tempFloor} &#176;C</span>
          </p>
          <p className="weather__info">sunrise {sunriseTime}</p>
          <p className="weather__info">sunset {sunsetTime}</p>
          <p className="weather__info">pressure {pressure} hpa</p>
          <p className="weather__info">humidity {humidity} %</p>
          <p className="weather__info">wind {wind} m/s</p>
          <p className="weather__info">
            coords
            <a
              href={`https://openweathermap.org/weathermap?zoom=12&lat=${
                coords.lat
              }&lon=${coords.lon}`}
              className="coord__info"
              target="__blank"
              aria-label="Map link to city"
            >{` ${coords.lat} , ${coords.lon}`}</a>
          </p>
        </div>
      </>
    );
  }

  return (
    <div>
      {error ? (
        <p className="weather__info--error">{`We cannot find ${name}`}</p>
      ) : (
        content
      )}
    </div>
  );
};

export default Result;
