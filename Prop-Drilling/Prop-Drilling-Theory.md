What is Prop Drilling?
Prop Drilling refers to the process of passing down props through multiple layers of components,
even when some of those components do not directly use the porps.
Prop Drilling also known as "component chaining".

When does Porp Drilling Occurs or used?
Prop Drilling is used when a prop needs to be passed through several layers of nested components
to reach a deeply nested child component that actually needs the prop.

Maybe when you need to fetch data from an api which needs to pass this data to multiple nested
child components.

[Here it is shown that GrandChildComponent has to
access the data but parent and child do npt use it
still the prop must sill be passed through them](./practical)
