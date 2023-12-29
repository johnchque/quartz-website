

## Create a React Application
```
npx create-react-app [name]
```
To create a local development server:
```
npm run start
```
It is the index.js file is taking the App component and it is rendering it to the dom inside the root element.
The folder node_modules has all the packages that need to be installed in order to run the project.
## Components
Are the building blocks of any react application. Every component will contain all the templates and logic for that piece of content.
The name of functions of React components have to start with a capital.
In React we use jsx which is similar to html. In jsx we don't use class because that is a reserved word in js.
At the end we always export our component function so we can use it in other values.
## Dynamic values in templates
We can create a variable inside a function before the return template.
```js
...
	const title = 'Welcome to the new blog';

    <div className="App">
      <div className='content'>
        <h1>{ title }</h1>
      </div>
    </div>
```
Numbers will be automatically converted to string in React. However, booleans and objects cannot be rendered.

## Multiple components 
In React the components are structured in a way that makes up a component tree.
The root component is the first one that gets rendered first in the html file. If we want to have more components we nest them into the root one.
For example:
```
- App.js
	- Navbar.js
	- Blogdetails.js
	- Sidebar.js
		- Categories.js
		- Tags.js
```
Stateless functional component.

A component can be an arrow function but it doesn't matter if they are not.
```js
const Navbar = () => {

return (
```

## Styles
Any css included in a root file, such as App.css will be applied to all the components that are in the browser at that time.

## Click events
We can define a function on a component:
```js
    const handleClick = () => {
        console.log('HELLO');
    }
```
And we can reference it on a button:
```jsx
            <button onClick={handleClick}>Click me</button>
```
It is important to remember that if the method is called like handleClick() then it will be invoked once the page is loaded. Instead, a reference without the brackets is needed.
To pass parameters, we can wrap the code inside an anonymous function:
```jsx
            <button onClick={() => {handleClick('John')}}>Click me</button>
```
The function will fire when the user clicks on that function. We are not invoking, we are just referencing it.
When we reference a function, it automatically gets as the first parameter the events object.
```js
    const handleClick = (e) => {
        console.log(e);
    }
```
```jsx
            <button onClick={(e) => {handleClick(e, 'John')}}>Click me</button>
```

## Using State (useState hook)
State refers to the data that is being used in the component at that time.
If we want to have a button that updates text on a component. We can create a variable:
```js
let name = "John";
```
And we can print it on the component as a variable:
```jsx
		<p>{ name }</p>
```
If the handleClick function of the button needs to update what is printed on screen, just changing the value for the variable name will not update the component, it will only change the value of the variable.
The variable would be then not reactive. When the value changes it does not trigger the react to rerender the component.
To make this work, we have to make the value reactive. For that we need to use a hook. 
The useState hook gives us a way to make a reactive value and change it whenever we want.
To define that we use the following:
```js
const [name, setName] = useState("John");
```
Where useState is the hook, John is the default value.
The two values that the hook returns are:
name, the initial name.
setName, a function we can use to change that value. When we use this function to change the value, that triggers react to rerender the component.

