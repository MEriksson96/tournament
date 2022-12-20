type Props = {
  round: any;
  index: number;
};

const Resultboard = ({ round, index }: Props) => {
  return (
    <>
      <div
        className={`${
          round.HasBeenPlayed === true ? "isPlayed" : "isNormal"
        } item-text`}
      >
        <span className="game-text">Match {index + 1}</span>
        <p className="names">{round.Round}</p>
      </div>
      <p className="result-text">
        {round.HasBeenPlayed ? (
          <p>
            {round.Result1} - {round.Result2}
          </p>
        ) : (
          ""
        )}
      </p>
    </>
  );
};

export default Resultboard;
