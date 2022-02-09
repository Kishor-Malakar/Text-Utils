import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container my-5" >
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                About Text-Utils
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#212529",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                <strong>Text-Utils is a text manipulating website: </strong> In
                this website you can manipulate your texts such as, you can
                convert your texts to uppercase, lowercase, remove extra spaces
                from paragraph and you can directly copy your texts in the
                clipboard using a button. There is a button where you can click
                to clear all the texts.
                <p></p>
                There is a feature to count the number of words and characters
                typed. You can also see the time required to read all the texts
                typed. After that there is a place where you will be able to preview
                the text you have typed.
                <p></p>
                There is another brilliant feature in the Navbar where you can toggle switch to enable Dark Mode. If you toggle the switch again it will disable Dark Mode.
                <hr />
                This website is a single page website created using RectJs and Bootstrap.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
