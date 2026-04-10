import React from "react";
import GrandchildComponent from "./GrandchildComponent";
import MyContext from "./MyContext";

function ChildComponent() {
  return (
    <MyContext.Consumer>
      {(data) => <GrandchildComponent data={data} />}
    </MyContext.Consumer>
  );
}

export default ChildComponent;
