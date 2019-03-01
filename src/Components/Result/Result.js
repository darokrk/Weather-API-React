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
        <ul className="weather__list">
          <li className="list__item list__item--bold">
            {name}, {country}
            <span className="list__item--italic"> {weather}</span>
          </li>
          <li className="list__item">
            <span className="list__item--bg">{tempFloor} &#176;C</span>
          </li>
          <li className="list__item">sunrise {sunriseTime}</li>
          <li className="list__item">sunset {sunsetTime}</li>
          <li className="list__item">pressure {pressure} hpa</li>
          <li className="list__item">humidity {humidity} %</li>
          <li className="list__item">wind {wind} m/s</li>
          <li className="list__item">
            coords
            <a
              href={`https://openweathermap.org/weathermap?zoom=12&lat=${
                coords.lat
              }&lon=${coords.lon}`}
              className="item__link"
              target="__blank"
              aria-label="Map link to city"
            >{` ${coords.lat} , ${coords.lon}`}</a>
          </li>
        </ul>
      </>
    );
  }

  return (
    <div className="content__wrapper">
      {error ? (
        <p className="error">{`We can't find ${name} in database`}</p>
      ) : (
        content
      )}
    </div>
  );
};

export default Result;
