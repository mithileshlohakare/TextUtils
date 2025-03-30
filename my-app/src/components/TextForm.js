import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState(""); // Fixed default text issue

    const handleLoClick = () => {
        if (text.trim() === "") {
            props.showAlert("Enter some text first!", "warning");
            return;
        }
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    };

    const handleUpClick = () => {
        if (text.trim() === "") {
            props.showAlert("Enter some text first!", "warning");
            return;
        }
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClearClick = () => {
        if (text.trim() === "") {
            props.showAlert("Already empty!", "warning");
            return;
        }
        setText("");
        props.showAlert("Text cleared!", "success");
    };

    const handleCopy = () => {
        if (text.trim() === "") {
            props.showAlert("Nothing to copy!", "warning");
            return;
        }
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success");
    };

    const handleRemoveExtraSpaces = () => {
        if (text.trim() === "") {
            props.showAlert("Enter some text first!", "warning");
            return;
        }
        let newText = text.replace(/\s+/g, " ").trim(); // Fixed spacing issue
        setText(newText);
        props.showAlert("Extra spaces removed!", "success");
    };

    return (
        <>
            <div className="container" style={{
                backgroundColor: props.mode === "dark" ? "#101820" : "white",
                color: props.mode === "dark" ? "#E4E4E4" : "black",
            }}>
                <h3>{props.heading}</h3>
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="3"
                    style={{
                        backgroundColor: props.mode === "dark" ? "#101820" : "white",
                        color: props.mode === "dark" ? "white" : "#101820",
                    }}
                ></textarea>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
                    Convert To Lowercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
                    Convert To Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
                    Clear
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>

            <div className="container my-3" style={{
                backgroundColor: props.mode === "dark" ? "#101820" : "white",
                color: props.mode === "dark" ? "white" : "black",
            }}>
                <h1>Text Summary</h1>
                <p>
                    {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
                </p>
                <p>
                    {0.008 * (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)} Minutes read
                </p>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
