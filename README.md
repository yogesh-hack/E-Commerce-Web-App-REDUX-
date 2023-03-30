# E-commerce Website

#### we have to learn how to use redux in react with simple project

### Project preview
#### Home page
![homepage](https://user-images.githubusercontent.com/83384315/228852781-835718af-2443-4181-9b0b-b5a00f50d95c.png)
#### cart page
![cartpage](https://user-images.githubusercontent.com/83384315/228852769-899e0608-e097-4dcd-9ff2-c6e98567f5de.png)

Redux is a popular JavaScript library for managing the state of a web application. It provides a centralized store that holds the application's state and allows for predictable state management through a set of rules and principles.

Redux is important for real-world applications for several reasons:

- **Large-scale applications**: Redux is especially useful for large-scale applications where state management can become complex and difficult to maintain. Redux provides a clear and organized way to manage the application's state, making it easier to debug and scale the application.

- **Predictable state management**: Redux enforces a set of rules and principles that help ensure that the state of the application remains predictable and consistent. This makes it easier for developers to reason about the application's behavior and understand how changes to the state will affect the application.

- **Centralized store**: The centralized store provided by Redux allows developers to access and update the application's state from anywhere in the application. This makes it easy to share state between components and keep the application's state in sync.

- **Time travel debugging** : Redux provides a powerful debugging tool called time travel debugging. This allows developers to step through the application's state changes over time and see how the state has changed over the course of the application's life.

Here's an example of how Redux might be used in a real-world application:

Let's say you're building a social media platform that allows users to post updates, comment on posts, and like posts. You decide to use Redux to manage the application's state.

- Store: You create a store that holds the application's state, including information about posts, comments, and likes.

- Actions: You define a set of actions that can be taken in the application, such as creating a new post, adding a comment to a post, or liking a post. Each action includes a type and payload that describes the action being taken and any data associated with the action.

- Reducers: You create a set of reducers that specify how the state should change in response to each action. For example, if a user creates a new post, the "create post" action would be dispatched to the store, and the "posts" reducer would update the state to include the new post.

- Components: You create components that subscribe to the store and display the state of the application. For example, you might create a component that displays a list of posts and their associated comments and likes. When the state of the application changes, the component automatically updates to reflect the new state.

By using Redux to manage the state of your social media platform, you can ensure that the application remains predictable and maintainable, even as it scales to handle large amounts of data and user interactions.


### Why used redux?
- To perform state management easily.

##### install redux in react
- `npm install @reduxjs/toolkit`

to bind the react with redux
- `npm install react-redux`

#### reducers 
- type of function , which it will makw state mutate(mutable)
- Synchronously calling always
- Do not call fetch functions in reducers.

[-] `useDispathprops` 
[-] `useSelector` use to get the data from redux states.


### When we used fetch with REDUX
 - when our data/components is shown in multiple pages, there we use Fetch with the help of REDUX.

## What is a "thunk"?
- The word "thunk" is a programming term that means *"a piece of code that does some delayed work"*. Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.

- **For Redux specifically, "thunks" are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.**

- Using thunks requires the redux-thunk middleware to be added to the Redux store as part of its configuration.

Thunks are a standard approach for writing async logic in Redux apps, and are commonly used for data fetching. However, they can be used for a variety of tasks, and can contain both synchronous and asynchronous logic.
