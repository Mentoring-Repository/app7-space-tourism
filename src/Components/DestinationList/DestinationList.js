import "./DestinationList.css";
import data from "../../utils/data.json";
import { useState, useEffect } from "react";

const DestinationList = () => {
  const [selected, setSelected] = useState("Moon");
  const [destinations, setDestinations] = useState([]);
  const [destData, setDestData] = useState({});

  const changeDestination = (newDestination) => {
    setSelected(newDestination);
  };

  useEffect(() => {
    let dest = [];
    data.destinations.forEach((destination) => {
      dest.push(destination.name);
    });
    setDestinations(dest);
  }, []);
  useEffect(() => {
    data.destinations.forEach((destination) => {
      if (destination.name === selected) {
        setDestData(destination);
      }
    });
  }, [selected]);

  return (
    <div className="row">
      <div className="col-6">
        <img src={destData.img} alt="" className="img-fluid dest-img" />
      </div>
      <div className="col-6 d-flex flex-column">
        <ul className="d-flex destination-list ps-0">
          {destinations.map((des) => (
            <li
              onClick={() => changeDestination(des)}
              className={
                selected === des ? "me-4 nav-text active" : "me-4 nav-text "
              }
            >
              {des}
            </li>
          ))}
        </ul>
        <p className="heading-2 dest-title">{destData.name} </p>
        <p className="dest-desc">{destData.desc} </p>
        <div className="row dest-details">
          <div className="col-6">
            <p className="subhead-2">AVG. DISTANCE</p>
            <p className="subhead-1">{destData.avg_dist} </p>
          </div>
          <div className="col-6">
            <p className="subhead-2">EST. TRAVEL TIME</p>
            <p className="subhead-1">{destData.avg_travel} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationList;
