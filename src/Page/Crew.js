import CrewList from "../Components/CrewList/CrewList";

const Crew = () => {
	return (
		<div className="crew-page-bg">
			<div className="page-layout row">
				<div className="page-heading-container col-12 ps-3 ps-xl-0">
					<p className="heading-5 text-center text-sm-start">
						<span className="page-nr me-4">02</span>
						<span className="page-title">Meet your crew</span>
					</p>
				</div>
				<div className="col-12">
					<CrewList />
				</div>
			</div>
		</div>
	);
};

export default Crew;
