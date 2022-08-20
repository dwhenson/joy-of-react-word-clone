import React from "react";

function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        return (
          <p className="guess" key={index}>
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResult;
