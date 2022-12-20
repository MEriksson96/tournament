type Props = {
  boxRound: string;
  round: any;
  leftSideGoals: number;
  rightSideGoals: number;
  handleLeftSideGoals: (e: any) => void;
  handleRightSideGoals: (e: any) => void;
  submitResult: (round: any, e: any) => void;
};

const UpdateScore = ({
  boxRound,
  round,
  leftSideGoals,
  rightSideGoals,
  handleLeftSideGoals,
  handleRightSideGoals,
  submitResult,
}: Props) => {
  return (
    <div className="resultBoard">
      {boxRound === round.Round ? (
        <div className="input-result">
          <div className="inputs">
            <form className="result-form">
              <input
                type="number"
                className="result-person"
                value={leftSideGoals}
                onChange={handleLeftSideGoals}
              />
              <input
                type="number"
                className="result-person"
                value={rightSideGoals}
                onChange={handleRightSideGoals}
              />
              <button
                type="submit"
                className="btn btn-success result-person result__button-submit"
                onClick={(e) => {
                  submitResult(round.Round, e);
                }}
              >
                +
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UpdateScore;
