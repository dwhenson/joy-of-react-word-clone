import React from "react";

function WordInput({ guesses, setGuesses }) {
  const [word, setWord] = React.useState("");

  function handleWordSubmit(event) {
    event.preventDefault();
    if (word.length !== 5) return;
    setGuesses([...guesses, word]);
    setWord("");
  }

  function handleWordChange(event) {
    if (word.length >= 5) return;
    if (!/^[a-zA-Z]+$/.test(event.target.value.at(-1))) return;
    setWord(event.target.value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleWordSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={word}
        onChange={handleWordChange}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default WordInput;
