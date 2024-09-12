import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if(!divRef.current) return;
      if (!divRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div ref={divRef} className="w-48 relative">
      <Panel
        className="flex justify-between item-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "selection..."}
        <GoChevronDown className="text-lg" />
      </Panel>

      {isOpen && (
        <Panel className="absolute top-full ">
          {options.map((opt) => (
            <div
              className="hover:bg-sky-100 rounded cursor-pointer p-1"
              onClick={() => handleOptionClick(opt)}
              key={opt.value}
            >
              {opt.label}
            </div>
          ))}
        </Panel>
      )}
    </div>
  );
}

export default DropDown;
