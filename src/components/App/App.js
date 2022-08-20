import React from "react";

import Game from "../Game";
import Header from "../Header";
import WordInput from "../WordInput";
import GuessResult from "../GuessResult";

function App() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <GuessResult guesses={guesses} />
        <WordInput guesses={guesses} setGuesses={setGuesses} />
        <Game />
      </div>
    </div>
  );
}

export default App;
