import React from "react";

function WordInput({ handleGuessSubmit }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleWordSubmit(event) {
    event.preventDefault();
    if (tentativeGuess.length !== 5) return;
    handleGuessSubmit(tentativeGuess);
    setTentativeGuess("");
  }

  function handleWordChange(event) {
    if (tentativeGuess.length >= 5) return;
    if (!/[a-zA-Z]/.test(event.target.value.at(-1))) return;
    setTentativeGuess(event.target.value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleWordSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={handleWordChange}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default WordInput;
