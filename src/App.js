import React, { useState } from "react";

function App() {
  //this is a usestate hook, 'viewable' is a state for this program that can be set with 'setViewable'
  //Here it can be true or false. If it is true the lol you have no pp is visible, if false its not
  const [viewable, setViewable] = useState(false);

  //This is all javascript

  //console log here
  console.log("hellosd");

  //sets the main body background colour
  document.body.style = "background: #404040";

  //function that handles clikcing the click if you have no pp button click
  function handleSubmit(e) {
    e.preventDefault();
    setViewable(true);

    //console.log("lol u have no pp get reeeekt");
  }

  //function that handles clicking the wait I have a pp button click
  function hazPP(e) {
    e.preventDefault();
    setViewable(false);
  }

  //This is all html
  return (
    <div>
      <h1
        style={{
          color: "hotpink",
          justifyContent: "center",
          display: "flex",
          border: "solid",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        FAGLORD69 + MINDROCKETS GUD WEBSITE
      </h1>
      <h1 style={{ justifyContent: "center", display: "flex" }}>
        I'm the giant rat that makes all of the rules
      </h1>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <img
          src="https://cg4.cgsociety.org/uploads/images/large/jackrussel-fat-rat-1-ade40a47-vqva.jpg"
          width="400"
          height="400"
        />

        <img
          src="https://c.tenor.com/uLYv3MFt2HwAAAAM/rat-dancing-rat.gif"
          width="400"
          height="400"
        />
      </div>

      <h1 style={{ color: "white", display: "flex", justifyContent: "center" }}>
        <u>柯思霆和卢克的网站</u>
      </h1>
      <form style={{ marginLeft: "45%" }} onSubmit={handleSubmit}>
        <label>
          <input type="text" />
          <br />
          <button type="submit">click if have no pp</button>
        </label>
      </form>

      {viewable && (
        <div
          style={{
            fontSize: "x-large",
            justifyContent: "center",
            display: "flex",
            marginTop: "5%",
          }}
        >
          LOL YOU HAVE NO PP GET REKT
          <form onSubmit={hazPP}>
            <button>Wait no I hav pp</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default App;
