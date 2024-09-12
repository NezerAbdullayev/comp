import React from "react";
import Accordion from "../Components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "4j33",
      label: "react islede bilerem?",
      content:
        " react cox gozel bir kiabcanadri react cox gozel bir kiabcanadri react cox gozel bir kiabcanadri react cox gozel bir kiabcanadri v react cox gozel bir kiabcanadri ",
    },
    {
      id: "328j",
      label: "js islede bilerem?",
      content:
        " react cox gozel bir kiabcanadri react cox gozel bir kiabcanadri react cox gozel bir kiabcanadri react cox gozel bir kiabcanadri v react cox gozel bir kiabcanadri ",
    },
    {
      id: "23d3",
      label: "css islede bilerem?",
      content:
        " react cox gozel bir kiabcanadri react cox gozel bir kiabcanadri react cox gozel bir kiabcanadri react cox gozel bir kiabcanadri v react cox gozel bir kiabcanadri ",
    },
  ];
  return (
    <>
      <Accordion items={items} />
    </>
  );
}

export default AccordionPage;
