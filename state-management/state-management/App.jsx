//We can add the Header, Nav, ListArea and Footer components to the App component's JSX. Our root component should look like this:

import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState(" ");
  return (
    <div>
      <Header />
      <Nav />
      <ListArea />
      <Footer />
    </div>
  );
}

//The individual components with their JSX's should look like this:

function Header() {
  return <h2>ToDo List</h2>;
}

function Nav() {
  return (
    <>
      <input type="text" />
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

//This is a simple representation of our Todo List. Next, we'll add some logic and make the states come to life. For now, the states reside in the App component.
