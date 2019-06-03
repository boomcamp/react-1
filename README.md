# Project Summary

In this project we will create a react application that solves computer science toy problems and
showcases them in a feed. The file structure has already been created for us but none of the functionality
works. At the end of this project you should have an understanding of the following topics:

* Components
* Utilizing state
* import / export (es6 modules)
* .gitignore
* npm install

## Setup

* `Fork` and `clone` this repository.
* Create a `submission` branch in `git` and checkout that branch
* `cd` into the project directory.
* Run `npm install`.
* After `npm install` has finished run `npm start` to start the development server.

## Step 1

### Summary

In this step, we are going to dive into the functionality of the application. If we take a look into
the `src` folder we'll see that we have a `components` folder with a `TopicBrowser` and a `Topics` folder.
Our `TopicBrowser` component will display a list of topics from the `Topics` folder. Each topic will be its own component.

### Instructions

* Open `src/components/TopicBrowser/TopicBrowser.js`.
* Import `React` and `Component` from `react`.
* Create a react function component called `TopicBrowser`:
  * This component should one `<p>` element that contains the text "Hello World."
* Export `TopicBrowser` by default.
* Open `src/App.js`.
* Import the `TopicBrowser` component after the `import` of react.
* Render the `TopicBrowser` component in the return value of `App`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `src/components/TopicBrowser/TopicBrowser.js` and importing what we need from react
at the top of the file. This will allow use to use JSX and create a `Component`.

```js
import React from 'react';
```

Now let's create a basic component that renders a `<p>` element that says "Hello World".
TopicBrowser is the name of the function, which can be anything you want, usually when dealing with
components it's common to see pascal case ( meaning the first letter is also captalized ). In React
pascal case is required for the name of your Component. If it is not pascal case the component will not
mount or render in your application. Since this component is going to browse our topics, I went with
the name TopicBrowser.

```js
function TopicBrowser() {

}
```

Now that we have our component `TopicBrowser` let's have it render the `<p>` element. In a function component
we just need to return the JSX that we wish to render.

```js
function TopicBrowser() {
  return (
    <p> Hello World </p>
  )
}
```

Then we need to `export` our `TopicBrowser` component so that other files can `import` it.
You may have seen two different ways to accomplish this method. One way is exporting it at the end
of the file and another way is doing it on the same line as when you declare your function.

<details>

<summary> <code> TopicBrowser.js ( export on bottom ) </code> </summary>

```js
import React from 'react';

function TopicBrowser() {
  return (
    <p> Hello World </p>
  )
}

export default TopicBrowser;
```

</details>

<details>

<summary> <code> TopicBrowser.js ( export on same line ) </code> </summary>

```js
import React from 'react';

export default function TopicBrowser() {
  return (
    <p> Hello World </p>
  )
}
```

</details>

<br />

Both ways are completely fine, however I'll be using the same line `export`.
Now that our `export` is setup we can `import` it in `App.js` and `render` it.
We can `import` components with the following format: `import ComponentNameHere from '/file_path_to_component_here'`.
Therefore our `import` in `src/components/App.js` would look like:

```js
import TopicBrowser from './components/TopicBrowser/TopicBrowser'
```

The `import` is clever enough to add on the `.js` extension for us.
Now that `src/components/App.js` has `TopicBrowser` imported we can `render` it the same way rendered
our `<p>` element in `TopicBrowser`. The only difference being to `render` components you wrap the
component name in `< />`. Our `src/components/App.js` should now look like:

```js
import React from 'react';
import './index.css';

import TopicBrowser from './components/TopicBrowser/TopicBrowser'

function App() {
  return (
    <TopicBrowser />
  )
}

export default App;
```

</details>

## Solution

<details>

<summary> <code> App.js </code> </summary>

```js
import React from 'react';
import './index.css';

import TopicBrowser from './components/TopicBrowser/TopicBrowser'

class App extends Component {
  return (
    <TopicBrowser />
  )
}

export default App;
```

</details>

<details>

<summary> <code> TopicBrowser.js </code> </summary>

```js
import React from 'react';

export default function TopicBrowser() {
  return (
    <p> Hello World </p>
  )
}
```
</details>

## Step 2

### Summary

In this step, we'll render all of our topics from the `Topics` folder, create the basic outlines for
each of the topics ( the same exact way we did `TopicBrowser` ) with the only difference being the
`<p>` element saying what the component name is, and then import and render those topic components into our `TopicBrowser` component.

### Instructions

* Create a basic outline for each topic component ( the same exact way we did the `TopicBrowser` component ):
  * Make sure the name of the component is the same name as the file.
  * Have the component render a `<p>` element saying the name of the component.
* Open `src/components/TopicBrowser/TopicBrowser.js`.
* Import all the topic files from `src/components/Topics` into `src/components/TopicBrowser/TopicBrowser.js`.
* Render a parent `div` element containing all of the Topic components inside of the `TopicBrowser` component.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's start by going into our Topics folder. Inside we will see 5 javascript files, inside these files we will create a React component that solves a certain computer science toy problem. The basic outline is going to be similiar across these components with the only difference being the `<p>` element that gets rendered.

Creating a React function component:
* `import React, { Component } from 'react'`
* Create the class for your new component. The format is: `function FunctionNameGoesHere() {}`
* JSX must be returned from the function to render items.
* Export your newly created component either on the same line of it's declaration or at the bottom of the file.

Here is what the `EvenAndOdd` component will look like applying these bullet points.

```js
import React from 'react';

export default function EvenAndOdd() {
  return (
    <p> EvenAndOdd Component </p>
  )
}
```

<details>

<summary> <code> FilterObject.js </code> </summary>

```js
import React from 'react';

export default function FilterObject() {
  return (
    <p> FilterObject Component </p>
  )
}
```

</details>

<details>

<summary> <code> FilterString.js </code> </summary>

```js
import React from 'react';

export default funciton FilterString() {
  return (
    <p> FilterString Component </p>
  )
}
```

</details>

<details>

<summary> <code> Palindrome.js </code> </summary>

```js
import Reac from 'react';

export default function Palindrome() {
  return (
    <p> Palindrome Component </p>
  )
}
```

</details>

<details>

<summary> <code> Sum.js </code> </summary>

```js
import Reac from 'react';

export default function Sum() {
  return (
    <p> Sum Component </p>
  )
}
```

</details>

<br />

After you applied the same concepts to the 4 other javascript files in the Topics folder, we'll then
import them into `TopicBrowser.js`. Just like how we imported `TopicBrowser` into `App.js` we'll do:

```js
import React from 'react';

// Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default function TopicBrowser() {
  render() {
    return (

    )
  }
}
```

Now that they are imported into our `TopicBrowser` component we can render them in our `return`.
Similiar to how we rendered `TopicBrowser` in `App.js` we'll wrap each component we imported in `< />`.
Since we are trying to `render` more than component we'll have to wrap the components in a `<React.Fragment />`.
The `return` of a `render` method can only return one element, but there is no limit to how much you can nest in that one element.
The `React.Fragment` element is a helper that keeps us from having to add useless containers around multiple elements.
The `React.Fragment` does not get added to the dom when the application renders in the browser.

Your `TopicBrowser` should look like:

```js
import React from 'react';

// Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default function TopicBrowser() {
  return (
    <React.Fragment>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
    </React.Fragment>
  )
}
```

</details>

### Solution

<details>

<summary> <code> TopicBrowser.js </code> </summary>

```js
import React from 'react';

// Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default function TopicBrowser() {
  return (
    <React.Fragment>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
    </React.Fragment>
  )
}
```

</details>

<details>

<summary> <code> EvenAndOdd.js </code> </summary>

```js
import React from 'react';

export default function EvenAndOdd() {
  return (
    <p> EvenAndOdd Component </p>
  )
}
```

</details>

<details>

<summary> <code> FilterObject.js </code> </summary>

```js
import React from 'react';

export default function FilterObject() {
  return (
    <p> FilterObject Component </p>
  )
}
```

</details>

<details>

<summary> <code> FilterString.js </code> </summary>

```js
import React from 'react';

export default funciton FilterString() {
  return (
    <p> FilterString Component </p>
  )
}
```

</details>

<details>

<summary> <code> Palindrome.js </code> </summary>

```js
import React from 'react';

export default function Palindrome() {
  return (
    <p> Palindrome Component </p>
  )
}
```

</details>

<details>

<summary> <code> Sum.js </code> </summary>

```js
import React from 'react';

export default function Sum() {
  return (
    <p> Sum Component </p>
  )
}
```

</details>

## Step 3

### Summary

In the following steps it's important to understand that there is more than one way to solve a toy problem.
If your solution doesn't match what's in the project that's okay. Also, since the following 5 components
are very similiar in their structure, only step 3's detailed instructions go into great detail.
The other steps after that won't go into much detail.

In this step, we'll start with the first topic: `EvenAndOdd`.

### Instructions

**The problem summary:** Given a string of numbers separated by commas, split the numbers into two different arrays.
The first being an array of all the even numbers and the second being an array of all the odd numbers.

**The component outline:** One parent `div` element, one `h4` element, one `input` element, one `button` element, and two `span` elements.

* Open `src/components/Topics/EvenAndOdd.js`.
* Remove the `<p>` element from the `return`.
* Add the component outline to the returned JSX.
* Add the following attributes and values to the elements:
  * `div`
    *  `className="puzzleBox evenAndOddPB"`
  * `h4`
    *  text content - `Evens and Odds`
  * `input`
    * `className="inputLine"`
  * `button`
    * `className="confirmationButton"`
    * text content - `Split`
  * Both `span`'s
    * `className="resultsBox"`
* Setup some `useState` hooks that define our state for this component:
  * `evens` - This should default to an empty array.
  * `odds` - This should default to an empty array.
  * `userInput` - This should default to an empty string.
* Create an `onChange` prop for the `input` element that updates the value of `userInput` on state.
* Create an `onClick` prop for the `button` element that calls a function:
  * This function should solve the toy problem.
  * This function should update the value of `evens` and `odds` using the state hooks.
* Assign one `span` element to display the value of `evens`.
* Assign the other `span` element to display the value of `odds`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
export default function EvenAndOdd() {
  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" />
      <button className="confirmationButton">Split</button>
      <span className="resultsBox"></span>
      <span className="resultsBox"></span>
    </div>
  )
}
```

Now that we have a rough draft of every thing our component will need, let's start filling in the
functionality. We will use state to keep track of what the user input is, our even's array, and
our odd's array. We can use state by utilizing the `useState` hook for each piece of state we require.

```js
const [evens, setEvens] = useState([]);
const [odds, setOdds] = useState([]);
const [userInput, setUserInput] = useState('');
```

Next, let's update our last two `span` elements to display our `evens` and `odds`.

```js
return (
  <div className="puzzleBox evenAndOddPB">
    <h4>Evens and Odds</h4>
    <input className="inputLine" />
    <button className="confirmationButton">Split</button>
    <span className="resultsBox">Evens: {JSON.stringify(evens)}</span>
    <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
  </div>
)
```

What's `JSON.stringify`? This is not a necassary addition, but without it your array would not display as [1,2,3,4] but rather 1234.
`JSON.stringify` gives our display a more readable format. You could just do `evens` or `odds` if you want to.

Next let's update our `input` element to handle user input. In React you can use the `onChange` attribute
that calls a function every time a user types in the `input` field.

```js
return (
  <div className="puzzleBox evenAndOddPB">
    <h4>Evens and Odds</h4>
    <input className="inputLine" />
    <button className="confirmationButton" onChange={e => setUserInput(e.target.value)}>Split</button>
    <span className="resultsBox">Evens: {JSON.stringify(evens)}</span>
    <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
  </div>
)
```

What's `e`? `e` is the event. In this instance we can use the event to get the current value inside of the `input` element.
We can access this by doing `e.target.value`. With this setup, every time a user types in this `input`
field our arrow function gets called, capturing the event, and then calls the `setUserInput` function provided by the `useState` hook.
For example if I typed in the `input` field "1,2" then `handleChange` will have been called three times.
Every key stroke invokes the arrow function  and passes in the `target.value`, this would look like:

* First Time: `e.target.value` = "1"
* Second Time: `e.target.value` = "1,"
* Third Time: `e.target.value` = "1,2"

Now that our `input` functionality is finished, all that's left is getting our `button` to execute a function
that solves the toy problem. In React we can execute a function on a button click by using the attribute `onClick`.
Since we want to execute this method with an argument we'll nest it in an arrow function.

```js
return (
  <div className="puzzleBox evenAndOddPB">
    <h4>Evens and Odds</h4>
    <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
    <button className="confirmationButton" onClick={() => solve(userInput)}>Split</button>
    <span className="resultsBox">Evens: {JSON.stringify(evens)}</span>
    <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
  </div>
)
```

Now whenever a user clicks our `button` element our arrow function is called which calls a `solve` function
and passes in the current `userInput` value. Let's create this function inside our component.

```js
function solve(input) {
 // implement your logic to solve the problem here
}
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section below.

</details>

### Solution

<details>

<summary> <code> EvenAndOdd.js </code> </summary>

```js
import React, { useState } from 'react';

export default function EvenAndOdd() {
  const [ evens, setEvens ] = useState([]);
  const [odds, setOdds] = useState([]);
  const [userInput, setUserInput] = useState('');

  function solve(input) {
    const results = {
      evens: [],
      odds: [],
    }
    for (let val of input.split(',').map(v => parseInt(v))) {
      if (val % 2 === 0) {
        results.evens.push(val);
      } else {
        results.odds.push(val);
      }
    }

    setEvens(results.evens);
    setOdds(results.odds);
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
      <button className="confirmationButton" onClick={() => solve(userInput)}>Split</button>
      <span className="resultsBox">Evens: {JSON.stringify(evens)}</span>
      <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
    </div>
  )
}
```

</details>

## Step 4

### Summary

In this step, we'll build out the `FilterObject` component.

### Instructions

**The problem summary:** Using a pre-determined array of objects, filter out objects that do not
have a given property. Display a new array populated with the objects that do have the given property.

**The component outline:**
```html
<div>
  <h4></h4>
  <span></span>
  <input />
  <button><button>
  <span></span>
</div>
```

* Open `src/components/Topics/FilterObject.js`.
* Remove the `<p>` element from the `return`.
* Add the component outline to the `return`.
* Add the following `className` props to the outline:
  * `div`
    * `className="puzzleBox filterObjectPB"`
  * The first `span`
    * `className="puzzleText"`
  * `input`
    * `className="inputLine"`
  * `button`
    * `className="confirmationButton"`
  * The last `span`
    * `className="resultsBox filterObjectRB"`
* Assign the `h4` element the value of `"Filter Object"`.
* Create the following pieces of state using the `useState` hook:
  * `unFilteredArray` - This should default to an array of objects.
      Try to pick an array of objects that share similiar propteries but they should not be indentical objects.
  * `userInput` - This should default to an empty string.
  * `filteredArray` - This should default to an empty array.
* Create an `onChange` prop for the `input` element that updates the value of `userInput` on state.
* Create an `onClick` prop for the `button` element that calls a function:
  * This function should solve the toy problem.
  * This function should update the value of `filteredArray`.
* Assign the first `span` element the value of `unFilteredArray`.
* Assign the last `span` element the value of `filteredArray`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
  return (
    <div className="puzzleBox filterObjectPB">
      <h4> Filter Object </h4>
      <span className="puzzleText"></span>
      <input className="inputLine"></input>
      <button className="confirmationButton"> Filter </button>
      <span className="resultsBox filterObjectRB"></span>
    </div>
  )
```

Now that we have a rough draft of everything our component will need, let's start filling in the functionality.
We will use state to keep tracck of what the user input is, our unfiltered array, and our filtered array.

```js
  const [unFilteredArray, setUnFilteredArray] = useState([
    { name:  'John', title: 'Junior Developer', age: 20 },
    { name: 'Bob', title: 'Development Manager', age: 32, yearsEmployed: 2 },
    { name: 'Lisa', title: 'Senior Developer' },
  ]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [userInput, setUserInput] = useState('');
```

Next let's update our `span` elements to display our unfiltered and filtered array of employees.

```js
return (
  <div className="puzzleBox filterObjectPB">
    <h4> Filter Object </h4>
    <span className="puzzleText"> Original: { JSON.stringify(unFilteredArray, null, 10) } </span>
    <input className="inputLine"></input>
    <button className="confirmationButton"> Filter </button>
    <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(filteredArray, null, 10) } </span>
  </div>
)
```

Next let's update our `input` element to handle user input.

```js
return (
  <div className="puzzleBox filterObjectPB">
    <h4> Filter Object </h4>
    <span className="puzzleText"> Original: { JSON.stringify(unFilteredArray, null, 10) } </span>
    <input className="inputLine" onChange={ e => setUserInput(e.target.value) }></input>
    <button className="confirmationButton"> Filter </button>
    <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(filteredArray, null, 10) } </span>
  </div>
)
```

Finally let's update our `button` element to handle filtering our employee array.

```js
  function filter(input) {
    // add solution to problem here
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(unFilteredArray, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => filter(userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(filteredArray, null, 10) } </span>
      </div>
    )
  }
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section.

</details>

### Solution

<details>

<summary> <code> FilterObject.js </code> </summary>

```js
import React, { useState } from 'react';

export default function FilterObject() {
  const [unFilteredArray, setUnFilteredArray] = useState([
    { name:  'John', title: 'Junior Developer', age: 20 },
    { name: 'Bob', title: 'Development Manager', age: 32, yearsEmployed: 2 },
    { name: 'Lisa', title: 'Senior Developer' },
  ]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [userInput, setUserInput] = useState('');

  function filter(input) {
    const filtered = unFilteredArray.filter(o => {
      if (o[input]) {
        return true;
      }

      return false
    })

    setFilteredArray(filtered);
  }

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">Original: {JSON.stringify(unFilteredArray, null, 10)}</span>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
      <button className="confirmationButton" onClick={() => filter(userInput)}>Filter</button>
      <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filteredArray, null, 10)}</span>
    </div>
  )
}
```

</details>

## Step 5

### Summary

In this step, we'll build out the `FilterString` component.

### Instructions

**The problem summary:** Using a pre-determined array of strings, filter out strings that do not contain a given string.
Display a new array populated with the strings that do contain the given string.

**The component outline:**

```html
<div>
  <h4></h4>
  <span></span>
  <input />
  <button></button>
  <span></span>
</div>
```

* Open `src/components/Topics/FilterString.js`.
* Remove the `<p>` element from the `return`.
* Add the component outline to the `return`.
* Add the following `className` props to the outline:
  * `div`
    * `className="puzzleBox filterStringPB"`
  * The first `span`
    * `className="puzzleText"`
  * `input`
    * `className="inputLine"`
  * `button`
    * `className="confirmationButton"`
  * The last `span`
    * `className="resultsBox filterStringRB"`
* Assign the `h4` element the value of `Filter String`.
* Use the `useState` hook to initialize the following pieces of state:
  * `names` - This should default to an array of strings. You choose what strings go in the array.
  * `userInput` - This should default to an empty string.
  * `filteredNames` - This should default to an empty array.
* Create an `onChange` prop for the `input` element that updates the value of the `userInput` state.
* Create an `onClick` prop for the `button` element that calls a function:
  * This function should solve the toy problem.
  * This function should update the value of `filteredNames`.
* Assign the first `span` element the value of `naems`.
* Assign the last `span` element the value of `filteredNames`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
return (
  <div className="puzzleBox filterStringPB">
    <h4> Filter String </h4>
    <span className="puzzleText"></span>
    <input className="inputLine"></input>
    <button className="confirmationButton"> Filter </button>
    <span className="resultsBox filterStringRB"></span>
  </div>
)
```

Now that we have a rough draft of everything our component will need, let's start filling in the functionality.
We will use state to keep track of what the user input is, our unfiltered array, and our filtered array.

```js
  const [names, setNames] = useState(['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'])
  const [filteredNames, setFilteredNames] = useState([]);
  const [userInput, setUserInput] = useState('');
```

Next, let's update our `span` elements to display our unfiltered and filtered array of names.

```js
return (
  <div className="puzzleBox filterStringPB">
    <h4> Filter String </h4>
    <span className="puzzleText"> Names: { JSON.stringify(names, null, 10) } </span>
    <input className="inputLine"></input>
    <button className="confirmationButton"> Filter </button>
    <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(filteredNames, null, 10) } </span>
  </div>
)
```

Next, let's update our `input` element to handle user input.

```js
return (
  <div className="puzzleBox filterStringPB">
    <h4> Filter String </h4>
    <span className="puzzleText"> Names: { JSON.stringify(names, null, 10) } </span>
    <input className="inputLine" onChange={ e => setUserInput(e.target.value) }></input>
    <button className="confirmationButton"> Filter </button>
    <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(filteredNames, null, 10) } </span>
  </div>
)
```

Finally, let's update our `button` element to handle filtering our names array.

```js
  function filterNames(userInput) {
    // add implementation for solving toy problem
  }

  return (
    <div className="puzzleBox filterStringPB">
      <h4> Filter String </h4>
      <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => filterNames(userInput) }> Filter </button>
      <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
    </div>
  )
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section.

</details>

### Solution

<details>

<summary> <code> FilterString.js </code> </summary>

```js
import React, { useState } from 'react';

export default function FilterString() {
  const [names, setNames] = useState([
    'James',
    'Jessica',
    'Melody',
    'Tyler',
    'Blake',
    'Jennifer',
    'Mark',
    'Maddy',
  ]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [userInput, setUserInput] = useState('');

  function filterNames(string) {
    setFilteredNames(
      names.filter(name => name.includes(string))
    )
  }

  return (
    <div className="puzzleBox filterStringPB">
      <h4> Filter String </h4>
      <span className="puzzleText">
        {' '}
        Names: {JSON.stringify(names, null, 10)}{' '}
      </span>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
      <button className="confirmationButton" onClick={() => filterNames(userInput)}> Filter </button>
      <span className="resultsBox filterStringRB">
        {' '}
        Filtered Names: {JSON.stringify(filteredNames, null, 10)}{' '}
      </span>
    </div>
  );
}
```

</details>

## The next components will have limited guidance!

## Step 6

### Summary

In this step, we'll build out the `Palindrome` component.

### Instructions

**The problem summary:** Given string, determine if it is spelt the same backwards as it is forwards.
> Example: kayak (same forward and backwards)

**The component outline:**

```html
<div className="puzzleBox palindromePB">
  <h4> Palindrome </h4>
  <input className="inputLine"></input>
  <button className="confirmationButton"> Check </button>
  <span className="resultsBox"></span>
</div>
```
The use should be able to type a word into the input and then push the `check` button to see if the
word is a palindrome.

## Step 7

### Summary

In this step, we'll build out the `Sum` component.

### Instructions

**The problem summary:** Given an comma separated string of numbers, calculate the sum of all numbers in the String and display it.

**The component outline:**

```html
<div className="puzzleBox sumPB">
  <h4> Sum </h4>
  <input className="inputLine"></input>
  <button className="confirmationButton"> Add </button>
  <span className="resultsBox"></span>
</div>
```

## Challenge Steps

To take this project a step further try to add more toy problems to the project.

## Finished

Create a pull request back to the main repository you forked this project from. Make sure to make
your pull request from your `submission` branch.
