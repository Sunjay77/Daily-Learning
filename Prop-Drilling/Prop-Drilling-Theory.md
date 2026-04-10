<mark>What is Prop Drilling?
Prop Drilling refers to the process of passing down props through multiple layers of components,
even when some of those components do not directly use the porps.
Prop Drilling also known as "component chaining".
<mark>

When does Porp Drilling Occurs or used?
Prop Drilling is used when a prop needs to be passed through several layers of nested components
to reach a deeply nested child component that actually needs the prop.

Maybe when you need to fetch data from an api which needs to pass this data to multiple nested
child components.

[Here it is shown that GrandChildComponent has to
access the data but parent and child do npt use it
still the prop must sill be passed through them](../prop-drilling/Practical/ChildComponent.js)


+ Complexity and Boilerplate Code

Prop drilling can lead to increased complexity and boilerplate code. especially in large component trees.

- Component Coupling
Prop drilling can tightly couple components together, making it harder to refactor or restructure the component hierarchy without
affecting other parts of the application.

- Performance Overhead
Passing props through multiple levels of components can introduce performance overhead, especially if the props contain large amounts of data.