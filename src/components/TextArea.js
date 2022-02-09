import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");
  const handleClickUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClickDown = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard.")
  };
  const handleSpace = () => {
    let newTextt = text.split(/[ ]+/);
    setText(newTextt.join(" "));
  };
  const handleClear = () => {
    setText("");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h3 className="pt-3">{props.head}</h3>
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          id="myText"
          rows={11}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#212529",
            color: props.mode === "light" ? "black" : "white",
          }}
          placeholder="Type Here..."
        />
        <button disabled={text.length===0} className="btn btn-success my-3 mx-1" onClick={handleClickUp}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-success my-3 mx-1" onClick={handleClickDown}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-success my-3 mx-1" onClick={handleSpace}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-success my-3 mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-danger my-3 mx-1 float-end" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-3 p-3">
        <h3>Your Text Summary</h3>
        <p>
          Number of Words: {text.split(/[^\s]+/).length - 1}
          <br />
          Number of Characters: {text.length}
          <br />
          You can read the above Texts in{" "}
          {0.008 * text.split(/[^\s]+/).length - 0.008} minutes.
        </p>
      </div>
      <div className="container my-3 p-3 pb-5">
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something to Preview..."}</p>
        <br />
      </div>
    </>
  );
}
