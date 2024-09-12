import React, { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick=(nextIndex)=>{
    if(nextIndex===expandedIndex){
      setExpandedIndex(null)
    }
    else{
      setExpandedIndex(nextIndex)
    }
  }

  return (
    <div className="border-x border-t rounded">
      {items.map((item, index) => (
        <div key={item.id}>
          <div
            className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
            onClick={() => handleClick(index)}
          >
            {item.label}
            <span className="text-2xl ">
              {index === expandedIndex ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
          </div>
          {index === expandedIndex && (
            <div className="border-b p-5">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
