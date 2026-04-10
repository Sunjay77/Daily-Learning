import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const data = "Hello from parent";

  return (
    <div>
      <ChildComponent data={data}/>
    </div>
  )
}

export default ParentComponent