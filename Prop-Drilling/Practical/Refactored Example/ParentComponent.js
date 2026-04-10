import React from "react";
import ChildComponent from "./ChildComponent";
import MyContext from "./MyContext";

function ParentComponent() {
  const data = "Hello from Parent";

  return (
    <MyContext.Provider value={data}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

export default ParentComponent;
