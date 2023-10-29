import CrewList from "../Components/CrewList/CrewList";

const Crew = () => {
  return (
    <div className="crew-page-bg page-layout crew-style row">
      <div className="col-12 ps-3 ps-xl-0">
        <p className="heading-5">
          <span className="page-nr me-4">02</span>
          <span className="page-title">Meet your crew</span>
        </p>
      </div>
      <div className="col-12">
        <CrewList />
      </div>
    </div>
  );
};

export default Crew;
