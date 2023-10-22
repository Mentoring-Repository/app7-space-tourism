import DestinationList from "../Components/DestinationList/DestinationList";

const Destination = () => {
  return (
    <>
      <div className="destination-page">
        <p className="heading-5">
          <span className="destination-page-nr">01</span>
          <span className="destination-page-title"> Pick your destination</span>
        </p>
        <DestinationList />
      </div>
    </>
  );
};

export default Destination;
