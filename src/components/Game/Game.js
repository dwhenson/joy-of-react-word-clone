import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WordInput from "../WordInput";
import GuessResult from "../GuessResult";
import WonBanner from "../WonBanner";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(false);

  function handleGuessSubmit(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <WordInput
        handleGuessSubmit={handleGuessSubmit}
        disabled={!!gameStatus}
      />
      {!!gameStatus && (
        <WonBanner
          guessesTaken={guesses.length}
          answer={answer}
          gameStatus={gameStatus}
        />
      )}
    </>
  );
}

export default Game;
