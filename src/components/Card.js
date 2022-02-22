import React from "react";

const Card = ({ name }) => {
  return (
    <div className=" tc bg-light-green dib br3 pa3 ma3 grow bw-2 shadow-5">
      <div>
        <img src={`https://robohash.org/${name}200*200"`} alt="Robot display" />
      </div>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};
export default Card;
