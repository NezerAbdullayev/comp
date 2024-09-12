import React, { useState } from "react";
import DropDown from "../Components/DropDown";

function DropDownPage() {
  const [selection, setSelection] = useState(null);
  const handleSelection = (options) => {
    setSelection(options);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Green",
      value: "green",
    },
  ];

  return (
    <div className="flex ">
      <DropDown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}

export default DropDownPage;
