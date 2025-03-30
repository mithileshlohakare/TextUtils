import React from 'react';

export default function About(props) {
    const myStyle = {
        backgroundColor: props.mode === "dark" ? "#1F2937" : "white", // Same as navbar
        color: props.mode === "dark" ? "#F8FAFC" : "#101820", // Same as navbar text
        border: "0.5px solid black", // No odd borders
    };

    return (
        <div className="container my-3 p-3 rounded" style={myStyle}>
            <h2 className="my-3">About TextUtils</h2>
            <p>
                TextUtils is a text manipulation tool that allows you to analyze, format, and optimize your text effortlessly.
            </p>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                            style={myStyle}
                        >
                            Text Conversion Features
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Convert text to uppercase, lowercase, and remove extra spaces easily.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Text Analysis
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Analyze word count, character count, and reading time for any text.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            More Features Coming Soon
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Stay tuned for features like text summarization, keyword extraction, and more!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
