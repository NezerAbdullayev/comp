import React from "react";
import DropDownPage from "./Pages/DropDownPage";
import Route from "./Components/Route";
import AccordionPage from "./Pages/AccordionPage";
import SideBar from "./Components/SideBar";
import ButtonPage from "./Pages/ButtonPage";
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";
import CounterPage from "./Pages/CounterPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage/>
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={1} />
        </Route>
      </div>
    </div>
  );
}

export default App;
