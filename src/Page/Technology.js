import TechnologyList from "../Components/TechnologyList/TechnologyList";

const Technology = () => {
	return (
		<div className="technology-page-bg page-layout tech-style row">
			<div className="col-12 ps-3 ps-xl-0">
				<p className="heading-5">
					<span className="page-nr me-4">03</span>
					<span className="page-title">space launch 101</span>
				</p>
			</div>
			<div className="col-12">
                <TechnologyList/>
            </div>
		</div>
	);
};

export default Technology;
