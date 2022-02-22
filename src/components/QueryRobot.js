import React from "react";

const Robot = ({ props }) => {
  return (
    <div>
      <label className=""></label>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="How Many Robot"
        onChange={props.searchRobot}
      />
      <button onClick={props.searchRobot} className="ma3 pa3">
        Go
      </button>
    </div>
  );
};

export default Robot;
