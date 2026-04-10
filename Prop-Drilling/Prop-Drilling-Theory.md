# What is Prop Drilling?
Prop Drilling refers to the process of passing down props through multiple layers of components,
even when some of those components do not directly use the porps.
Prop Drilling also known as "component chaining".

# When does Porp Drilling Occurs or used?
Prop Drilling is used when a prop needs to be passed through several layers of nested components
to reach a deeply nested child component that actually needs the prop.

Maybe when you need to fetch data from an api which needs to pass this data to multiple nested
child components.

<mark>Here it is shown that GrandChildComponent has to
access the data but parent and child do npt use it
still the prop must sill be passed through them </mark>


+ Complexity and Boilerplate Code

Prop drilling can lead to increased complexity and boilerplate code. especially in large component trees.

- Component Coupling
Prop drilling can tightly couple components together, making it harder to refactor or restructure the component hierarchy without
affecting other parts of the application.

- Performance Overhead
Passing props through multiple levels of components can introduce performance overhead, especially if the props contain large amounts of data.

+ The "Component Composition" way
- How it works: You give the child its data at the top level and then pass that entire child down.

<layout>
<userAvatar user={user}/>
<layout/>
..Now layout doesn't need to know about user at all.

# How to Overcome Prop Drilling?

- Context API: Think of Context as "teleporter" for your data. you warp a section of your app in a provider, and any component inside can "hook" into that data instantly.
* Best for: Global data like "Logged-in User," "Theme(Dark/Light)," or "Language"
* The Hook: const data = userContext(MyContext)

- Statement Management: Libraries like Reduc, Zustand, or Recoil create a "Store" -a seprate container outside your component tree
If context is a teleporter, State Management is a cloud database for frontend.

- Render props & HOCs (The "plug-in" way): These are patterns used to share logic rather tahn just data

* Render Props: A component tells its child: "I will handle the logic, you just ell me how to draw it."

- HOCs: A function that wraps a component to give it "superpowers"(extra props). !NOTE: In modern React, there are mostly replaced by custom hooks.

## Conclusion

**Prop drilling can be seen like shortcut but it can hinder the maintainability of your code.**

* Context API, State management libraries, or the power of render props, will empower yourself to build clean maintainable and scable React applications.