import "./DestinationList.css";
import data from "../../utils/data.json";
import { useState } from "react";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  let dest = [];
  data.destinations.forEach((destination) => {
    dest.push(destination.name);
  });
  setDestinations(dest);
  return <></>;
};

export default DestinationList;
