import "./CrewList.css";
import { useState, useEffect } from "react";
import data from "../../utils/data.json";

const CrewList = () => {
  const [selected, setSelected] = useState(0);
  const [crewData, setCrewData] = useState({});
  const handleSelected = (index) => {
    setSelected(index);
  };

  useEffect(() => {
    data.crew.forEach((item, index) => {
      if (selected === index) {
        setCrewData(item);
      }
    });
  }, [selected]);

  return (
    <div className="row crew-container">
      <div className="col-6 d-flex justify-content-center  flex-column ">
        <div className="crew-details mb-4">
          <p className="heading-4 white-text opacity-50 text-uppercase mb-1">
            {crewData.title}{" "}
          </p>
          <p className="heading-3 white-text text-uppercase mb-3">
            {crewData.name}{" "}
          </p>
          <p className="light-purple-text ">{crewData.desc} </p>
        </div>
        <ul className="crew-list p-0 mt-5">
          {data.crew.map((crew, index) => (
            <li
              className="crew-item"
              onClick={() => handleSelected(index)}
            ></li>
          ))}
        </ul>
      </div>
      <div className="col-6 position-relative">
        <img className="crew-img" src={crewData.img} alt="" />
      </div>
    </div>
  );
};

export default CrewList;
