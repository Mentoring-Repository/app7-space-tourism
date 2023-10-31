import TechnologyList from "../Components/TechnologyList/TechnologyList";

const Technology = () => {
	return (
		<div className="technology-page-bg ">
			<div className="page-container page-layout tech-style row">
				<div className="col-12 ps-3 ps-xl-0">
					<p className="heading-5 text-center text-sm-start">
						<span className="page-nr me-4">03</span>
						<span className="page-title">space launch 101</span>
					</p>
				</div>
				<div className="col-12">
					<TechnologyList />
				</div>
			</div>
		</div>
	);
};

export default Technology;
