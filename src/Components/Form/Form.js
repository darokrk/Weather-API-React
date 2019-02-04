import React from "react";
import "./Form.scss";

const Form = props => {
  return (
    <>
      <h1 className="input__header">Search Weather in Your City</h1>
      <form onSubmit={props.submit}>
        <input
          onChange={props.search}
          value={props.value}
          className="input__text"
          type="text"
          placeholder="Insert city name"
        />
        <button className="input__btn">Search</button>
      </form>
    </>
  );
};

export default Form;
