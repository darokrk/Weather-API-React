import React from "react";
import "./Form.scss";

const Form = props => {
  return (
    <>
      <form className="form" onSubmit={props.submit}>
        <label className="form__label" htmlFor="input">
          Search Weather in Your City
        </label>
        <input
          onChange={props.search}
          value={props.value}
          id="input"
          className="form__input"
          type="text"
          placeholder="Insert city name"
        />
        <button className="form__btn">Search</button>
      </form>
    </>
  );
};

export default Form;
