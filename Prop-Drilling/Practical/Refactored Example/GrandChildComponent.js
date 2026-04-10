import React from "react";
import MyContext from "./MyContext";

function GrandchildComponent() {
  return <MyContext.Consumer>{(data) => <div>{data}</div>}</MyContext.Consumer>;
}

export default GrandchildComponent;
