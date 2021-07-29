import Sidebar from "./Sidebar";
import Chat from "./Chat";
import TestComponent from "./../TestComponent";
import React, { useState } from "react";

function MainLayout(props) {
  let [a, setA] = useState("test");
  return (
    <div className="app">
      <div className="app__body">
        {/* Chat  Section */}
        {/* Sidebar */}
        <Sidebar />
        {props.children}
        <Chat />
        {/* demo work <button onClick={() => setA("a")}>Check</button>
        <TestComponent testProp={a} />*/}
      </div>
    </div>
  );
}

export default MainLayout;
