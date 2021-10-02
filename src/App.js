import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling Face",
  "😉": "Winking Face",
  "😢": "Crying Face",
  "😳": "Flushed Face",
  "😠": "Angry Face"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputhandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];

    // console.log(userInput);
    if (userInput in emojiDictionary) {
      setMeaning(emojiMeaning);
    } else {
      setMeaning("Emoji meaning not in Database");
    }
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input
        onChange={emojiInputhandler}
        placeholder="Enter emoji icon"
      ></input>
      <h2>{meaning}</h2>
      <h3>Frequently used Emoji</h3>
      <div>
        {emojiList.map(function (emoji) {
          return (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
