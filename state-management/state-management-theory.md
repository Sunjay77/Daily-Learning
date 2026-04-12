## What is State?
<mark> State can be defined as an object that houses data that changes over time in an aplication. It is a data storage that manage to keep track of changing data and trigger re-rendering when its updated <mark>

# when to use State

- When Building Application, data plays an intergral role in what is been displayed or stored. Can also be used in web application in react.
- When there is a need to get data that has to be updated inside of component, we use state.

- example of simple (Todo list app) primarily accepts inputted items that would eventually be added to a displayed list.

**name and items hold the current value of the state variable. While setName and setItems are the function used to update the value of the state varuables**

- We can add header, nav,listArea and footer components to the App component's JSX, Our root component should look like this:import { useState } from "react";

export default function App() {
      const [items, setItems] = useState([]);
    const [name, setName] = useState(" ")
  return (
    <div>
      <Header />
      <Nav />
      <ListArea />
      <Footer />
    </div>
  );
}

The individual components with their JSX's should look like this:
function Header() {
  return <h2>ToDo List</h2>;
}

function Nav() {
  return (
    <>
      <input type="text"/>
      <button>Add</button>
    </>
  );
}

function ListArea() {
  return (
    <>
      <ul>
        <li></li>
      </ul>
    </>
  );
}

function Footer() {
  return (
    <>
      <p>You have items in your cart</p>
    </>
  );
}

# Where to use State?
- When using state, it is important to note that there are two types of states in React deelopment:

- Global State:
These are states that are accessible to every component in the application.It is always declared and located in the root component of your app before the JSX is returned.

- Local State:
Local states refers to the internal data maintained by a component. Local states are located within the parent components in an application. They are only needed and can be accessed in the component.

Using local state, components can independently change and handle their data which leads to partitioning within the application.

Looking at our declared states in the Todo List app, we can say that name is a local state and items is a global state.

The reasons are:

Two or more components will need access to the items state.
The name state is only needed to input item names into the items list.