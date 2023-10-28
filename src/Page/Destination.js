import DestinationList from "../Components/DestinationList/DestinationList";

const Destination = () => {
  return (
    <>
      <div className="destination-page row">
        <div className="col-12">
          <p className="heading-5">
            <span className="destination-page-nr me-4">01</span>
            <span className="destination-page-title">
              Pick your destination
            </span>
          </p>
        </div>
        <div className="col-12">
          <DestinationList />
        </div>
      </div>
    </>
  );
};

export default Destination;
