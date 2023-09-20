import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, region, population, name, flags } = props.country;
  console.log(props.country);
  return (
    <div className="country">
      <h2>Country Name :{name.common} </h2>
      <img src={flags.png} alt="" />
      <h4>Population :{population}</h4>
      <p>Region :{region}</p>
      <p>Area :{area}</p>
    </div>
  );
};

export default Country;
