import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ status, letter }) {
  const className = status ? `cell ${status}` : `cell`;

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          status={result ? result[num].status : undefined}
          letter={value ? result[num].letter : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
