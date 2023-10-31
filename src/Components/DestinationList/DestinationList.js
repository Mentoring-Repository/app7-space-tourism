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
			<div className="col-12 col-xl-6 d-flex justify-content-center justify-content-xl-start">
				<img
					src={destData.img}
					alt=""
					className="img-fluid dest-img"
				/>
			</div>
			<div className="col-12 col-xl-6 d-flex flex-column">
				<ul className="d-flex justify-content-center justify-content-xl-start text-center text-lg-start destination-list ps-0">
					{destinations.map((des) => (
						<li
							onClick={() => changeDestination(des)}
							className={
								selected === des
									? "pb-2 mx-auto mx-sm-0 me-auto me-sm-4 nav-text active-bottom"
									: "pb-2 mx-auto mx-sm-0 me-auto me-sm-4 nav-text "
							}
						>
							{des}
						</li>
					))}
				</ul>
				<p className="heading-2 dest-title text-center text-xl-start">{destData.name} </p>
				<p className="dest-desc text-center text-xl-start text-center text-xl-start mx-auto mx-xl-0">{destData.desc} </p>
				<div className="row dest-details d-flex flex-column flex-sm-row">
					<div className="col-6 text-center text-xl-start mx-auto mx-sm-0">
						<p className="subhead-2">AVG. DISTANCE</p>
						<p className="subhead-1">{destData.avg_dist} </p>
					</div>
					<div className="col-6 text-center text-xl-start mx-auto mx-sm-0">
						<p className="subhead-2">EST. TRAVEL TIME</p>
						<p className="subhead-1">{destData.avg_travel} </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DestinationList;
