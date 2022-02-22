import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return robots.map((user, i) => {
    return <Card key={robots[i].name} name={robots[i].name} />;
  });
};

export default CardList;
