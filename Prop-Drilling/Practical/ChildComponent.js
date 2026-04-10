import React from "react";
import GrandChildComponent from "./GrandChildComponent"

function ChildComponent(props) {
  return (
    <div>
      <GrandChildComponent data = {props.data}/>
    </div>
  )
}

export default ChildComponent;