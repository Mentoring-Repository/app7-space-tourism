import "./TechnologyList.css";
import data from "../../utils/data.json";
import { useState, useEffect } from "react";

const TechnologyList = () => {
	const [selected, setSelected] = useState(0);
	const [techData, setTechData] = useState({});

	const handleSelected = (index) => {
		setSelected(index);
	};

	useEffect(() => {
		data.technology.forEach((item, index) => {
			if (selected === index) {
				setTechData(item);
			}
		});
	}, [selected]);

	return (
		<div className="d-flex flex-column flex-xl-row justify-content-between flex-nowrap">
			<div className="order-xl-1 order-2">
				<ul className="d-flex flex-row flex-xl-column justify-content-center">
					{data.technology.map((tech, index) => (
						<li
							className={
								selected === index
									? "technology-item heading-4 mb-5 active-tech"
									: "technology-item heading-4 mb-5"
							}
							key={index}
							onClick={() => handleSelected(index)}
						>
							{index + 1}
						</li>
					))}
				</ul>
			</div>
			<div className="tech-content order-xl-2 order-3">
				<p className="subhead-2 light-purple-text">
					THE TERMINOLOGY...
				</p>
				<h2 className="heading-3 text-white text-uppercase">
					{techData.name}
				</h2>
				<p className="light-purple-text">{techData.desc}</p>
			</div>
			<div className="order-xl-3 order-1">
				<img
					className="img-fluid tech-img"
					src={techData.img}
					alt=""
				/>
			</div>
		</div>
	);
};

export default TechnologyList;
