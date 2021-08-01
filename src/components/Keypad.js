// Code Keypad Component Here
import React from "react";

function Keypad() {
  function ChangeHandler() {
    console.log("Entering password...");
  }
  return <input type="password" onChange={ChangeHandler} />;
}

export default Keypad;
