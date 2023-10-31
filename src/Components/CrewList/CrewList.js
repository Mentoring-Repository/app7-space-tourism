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
		<div className="row d-flex h-auto h-xl-100">
			<div className="col-12 col-xl-6 d-flex justify-content-center flex-column order-2 order-sm-1 px-0 py-5 ps-2">
				<div className="crew-details text-center text-xl-start order-2 order-sm-1 mb-2 mb-xl-5">
					<p className="heading-4 white-text opacity-50 text-uppercase mb-1">
						{crewData.title}
					</p>
					<p className="heading-3 white-text text-uppercase mb-3">
						{crewData.name}
					</p>
					<p className="crew-desc light-purple-text text-center text-xl-start mx-auto mx-xl-0">
						{crewData.desc}
					</p>
				</div>
				<ul className="crew-list d-flex justify-content-center justify-content-xl-start order-1 order-sm-2 p-0 mt-2 mt-xl-5">
					{data.crew.map((crew, index) => (
						<li
							className={
								selected === index
									? "crew-item active-crew"
									: "crew-item"
							}
							onClick={() => handleSelected(index)}
						></li>
					))}
				</ul>
			</div>
			<div className="crew-img-container col-12 col-xl-6 d-flex justify-content-center justify-content-xl-end order-1 order-sm-2 px-3 px-xl-0">
				<img
					className="crew-img img-fluid"
					src={crewData.img}
					alt=""
				/>
			</div>
		</div>
	);
};

export default CrewList;
