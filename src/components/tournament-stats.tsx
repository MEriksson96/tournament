import LederBoard from "./leder-board";
import UpcomingRounds from "./next-rounds";
import QualifiedPlayers from "./qualified-players";

const Stats = () => {
  return (
    <div className="main-div">
      <div className="main-div-items">
        <div className="container-div-playoffs">
          <QualifiedPlayers />
          <hr></hr>
          <UpcomingRounds />
        </div>
        <LederBoard />
      </div>
    </div>
  );
};

export default Stats;
