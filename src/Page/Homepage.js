const Homepage = () => {
	return (
		<div className="homepage">
			<div className="homepage__content row justify-content-center align-items-end h-100">
				<div className="col-12 col-xl-6 d-flex flex-column justify-content-end pb-5 text-center text-xl-start">
					<p className="heading-5 light-purple-text">
						SO, YOU WANT TO TRAVEL TO
					</p>
					<p className="heading-1 white-text">SPACE</p>
					<p className="subhead-2 light-purple-text">
						Let’s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</p>
				</div>
				<div className="col-12 col-xl-6 d-flex flex-row flex-xl-column justify-content-center align-items-end pb-5">
					<button className="btn-explore">
						<a href="/destination">Explore</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
