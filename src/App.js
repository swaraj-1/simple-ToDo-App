import React from "react";
import Header from "./components/Header";
import Todoitem from "./components/Todoitem";
import Button from "./components/Button";

import "./App.css";

const App = () => {
  return ( 
    <div className = "todocontainer">
      <Header header="ToDo App"/>
      <Todoitem text="eat"/>
      <Todoitem text="read"/>
      <Todoitem text="play"/>
      <Todoitem text="sleep"/>
      <Button />
    </div>
 
  );
}
export default App;