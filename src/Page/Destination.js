import DestinationList from "../Components/DestinationList/DestinationList";

const Destination = () => {
	return (
		<div className="destination-page-bg">
			<div className=" page-layout row">
				<div className="col-12">
					<p className="heading-5 text-center text-xl-start">
						<span className="page-nr me-4">01</span>
						<span className="page-title">
							Pick your destination
						</span>
					</p>
				</div>
				<div className="col-12">
					<DestinationList />
				</div>
			</div>
		</div>
	);
};

export default Destination;
