import React from "react";
import Link from "../Components/Link";

function SideBar() {
  const links = [
    {
      label: "DropDown",
      path: "/",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Buttons",
      path: "/buttons",
    },
    {
      label: "Modals",
      path: "/modal",
    },
    {
      label:"Table",
      path:"/table"
    },
    {
      label: 'Counter',
      path: "/counter"
    }
  ];
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="mb-3 "
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
