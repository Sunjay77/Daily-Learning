import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const data = "Hello from parent";
  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;

//Example of Prop Drilling
const ParentComponent = () => {
  const data = fetchData(); //Assume fetching data an API
  return <ChildComponentA data={data} />;
};

const ChildComponentA = ({ data }) => {
    return (
        <ChildComponentB data={data} />
    );
};

const ChildComponentB = ({ data }) => {
    return (
        <ChildComponentC data={data} />
    );
};

// This continues...