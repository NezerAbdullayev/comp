import React from "react";
import Button from "../Components/Button";
import { GoBellFill } from "react-icons/go";

function ButtonPage() {
  function onclicks() {
    console.log("click");
  }
  return (
    <div>
      <Button primary onClick={onclicks}>
        {" "}
        Primary
        <GoBellFill />{" "}
      </Button>
      <Button danger> secondary </Button>
      <Button outline rounded>
        {" "}
        success
      </Button>
      <Button outline primary rounded>
        {" "}
        danger
      </Button>
    </div>
  );
}

export default ButtonPage;
