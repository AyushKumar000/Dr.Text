import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    if(text.length === 0){
    props.feedSetAlert("Please provide some text to operate!", "warning");
    return;
    }
    setText(text.toUpperCase());
    props.feedSetAlert("Converted into UpperCase!", "success");
  };

  const handleLoClick = () => {
    if(text.length === 0){
      props.feedSetAlert("Please provide some text to operate!", "warning");
      return;
      }
    setText(text.toLowerCase());
    props.feedSetAlert("Converted into LowerCase!", "success");
  };

  const handleClearClick = () => {
    if(text.length === 0){
      props.feedSetAlert("Please provide some text to operate!", "warning");
      return;
      }
    setText("");
    props.feedSetAlert("Text box cleared!", "success");
  };

  const handleCapClick = () => {
    if(text.length === 0){
      props.feedSetAlert("Please provide some text to operate!", "warning");
      return;
      }
    setText(
      text.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())
    );
    props.feedSetAlert("First letter of each word is capitilized!", "success");
  };

  const handleCopy = () => {
    if(text.length === 0){
      props.feedSetAlert("Please provide some text to operate!", "warning");
      return;
      }
    var sent = document.getElementById("myBox");
    sent.select();
    navigator.clipboard.writeText(sent.value);
    props.feedSetAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    if(text.length === 0){
      props.feedSetAlert("Please provide some text to operate!", "warning");
      return;
      }
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.feedSetAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="conatiner" style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>Enter text to analyze</h1>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Your text goes here...."
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-success" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-success mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-success mx-3" onClick={handleCapClick}>
          Capital First Letter
        </button>

        <button className="btn btn-success mx-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-success mx-3" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-danger mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-3" style={{ paddingLeft: 0 ,color: props.mode === "dark" ? "white" : "black"}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here...."}</p>
      </div>
    </>
  );
}
