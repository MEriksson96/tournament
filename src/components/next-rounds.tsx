import useRounds from "../context/rounds-context";

const UpcomingRounds = () => {
  const { rounds } = useRounds();
  const upcomingRounds = rounds
    .filter((x) => x.HasBeenPlayed === false)
    .slice(0, 2);

  return (
    <>
      <p className="playoffs-text">Nästkommande rundor</p>
      <div className="items">
        {upcomingRounds.length > 0 ? (
          <ul className="item-list">
            {upcomingRounds.map((round) => (
              <li key={round.Id} className="items-list-item">
                {round.Round}
              </li>
            ))}
          </ul>
        ) : (
          <span className="no-rounds__text">Inga rundor kvar att spela</span>
        )}
      </div>
    </>
  );
};

export default UpcomingRounds;
