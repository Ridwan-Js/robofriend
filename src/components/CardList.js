import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("oops! Something wrong in card list");
  }
  return robots.map((user, i) => {
    return (
      <Card
        key={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        id={robots[i].id}
      />
    );
  });
};

export default CardList;
