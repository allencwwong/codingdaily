# Day 1
## React Coding Challenge 1
#### source: https://medium.com/@justin.sherman/react-coding-interview-challenge-1-4b19bce85b0a

Write a functional component that accepts an arbitrarily nested object as a prop. Each key/property of the object is a word and its associated value is either (1) an object of the same format or (2) a definition string. An example of one such object is below.

```
{
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  }
```
#### starter code
```
import React, { useState } from "react";

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  return (
    // YOUR CODE HERE
  );
};

export default App;
```
# Day 2
## React Coding Challenge 2
#### source: https://medium.com/@justin.sherman/react-coding-interview-challenge-2-bb8909e2b4a0

Write a functional component that includes a text input field and, below it, a list of images. At the start, the list should be empty. When the user submits some string input-string, the function should append the robot image corresponding to that string to the current list of images.

The source of the image is ‘https://robohash.org/input-string’. Robohash provides unique images for any text. For example, put https://robohash.org/hello in your browser and you’ll see the image on the left. Put any other string, and you’ll see a different image.

When a user clicks on a robot image, the image should be removed from the list. Finally, if you are inclined to take on styling details, center the input field and display the robot list in centered rows that wrap to the next line after exceeding the page’s width. After entering many robots, the page should look something like this:

![rp2](https://user-images.githubusercontent.com/14840506/172269480-b26c0905-3c34-4f72-96f7-e67a552564a0.PNG)

#### starter code

```
import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  // YOUR CODE HERE
};
export default App;
```
# Day 3 + 4 (missed day 3)
## React Coding Challenge 3
#### source: https://medium.com/@justin.sherman/react-coding-interview-challenge-3-94bc3386ba1c

Write a functional component to render a button and a list of activities. The list of activities should start out with one activity. When the user clicks the button, an additional activity should be fetched and appended to the list. To generate a random activity, issue a get request to “https://www.boredapi.com/api/activity” — an API for development that does not require authentication. Each request will return a new, random object containing the following fields: activity, type, participants, price, link, key, and accessibility. The values associated with these fields are either strings or numbers. Here is an example of one such object:

```
{
  "activity": "Take your dog on a walk",
  "type": "relaxation",
  "participants": 1,
  "price": 0,
  "link": "",
  "key": "9318514",
  "accessibility": 0.2
}
```

![image](https://user-images.githubusercontent.com/14840506/173016383-fb4edad2-35f7-4647-8eea-63ceec354f2e.png)

## React Coding Challenge 4
#### source: https://medium.com/@justin.sherman/react-coding-interview-challenge-4-c41e2874d8ef

Write a component that renders five stacked identical images of ladder pieces. When the user hovers over a piece of the ladder, that ladder piece (as well as all the pieces below it) should expand to a larger size. The starting position of the component (when the user’s mouse is not over any of the images), should look like this. The component should return to this state when the user is not hovering over any images. The image can be found at “https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png”.

Below are two other possible states — when the user is hovering their mouse over the second image from the bottom and when the user is hovering their mouse over the fourth image from the bottom, respectively. Importantly, your solution should also be easily generalizable to any number of ladder segments.

## React Coding Challenge 5

#### source: https://medium.com/@justin.sherman/react-coding-interview-challenge-5-57c30b25fbb3

Create a functional component that renders an object of users extracted from context using React’s useContext() hook. The object’s keys are the users' names and the associated values are booleans that indicate whether the users are online or offline. The object should be defined in the parent component’s state and the object, as well as its associated setState() function, should be provided to the aforementioned functional component via context.

## React Coding Challenge 6
#### source: https://medium.com/@justin.sherman/react-coding-interview-challenge-6-222d66b6cdd5

Create a functional component to render a list of tasks (along with their subtasks) from an object. The subtasks should be organized into two columns, completed and to be completed, based on the boolean value associated with each task. The object will have the following format: any number of keys where each key is the text of the task, an array of any number of objects associated with each key, and finally, an object with one field (the subtask text) and one associated boolean value at every index of the array. Here is an example of one such object:

```
const INITIAL_LIST = {
  "Organize closet": [
    { "Donate old clothes and shoes": false },
    { "Buy new shelf": false },
    { "Put in shelf by color": false },
  ],
  "Finish homework": [
    { "Finish math homework": false },
    { "Finish science homework": false },
    { "Finish Reactjs homework": false },
  ],
  "Achieve nirvana": [
    { "Meditate a little": false },
    { "Gain some wisdom": false },
  ],
};
```
## React Coding Challenge 7

#### source: https://medium.com/@justin.sherman/react-coding-interview-challenge-7-a773daf12955

Create a functional component that renders a text input field and displays a list of the strings that the user has entered below it. Each string in the list should be displayed wholly if it has fewer than 6 characters. If not, it should be displayed as the first five characters of the string followed by ellipses. When the user clicks on a string from the list, a modal should popup containing the complete text of the string. The modal should be centered on the page, and it should block the input field. The modal should close when the user clicks outside of it (you should add a border or background to the modal to test that this functionality is included).

The picture below shows the component after the user has entered three strings: “Hi, my name is Justin”, “What is your name?”, and “hello”.


## React Coding Challenge 7
#### source: https://medium.com/@justin.sherman/react-coding-interview-challenge-8-f852c6d19385

Create a functional component that accepts as a prop an array of question objects and renders a quiz. The quiz displays one question at a time in the order that they appear in the questions array, and it only advances to the next question when the user selects an answer choice. The quiz does not support returning to previously answered questions, although you can attempt to add this functionality later. After the user has answered all the questions, display the user’s score as a percentage. An example input array is given below, but be sure not to assume that there are a fixed number of questions or that each question has a fixed number of answer choices. The “correct” field of each question object indicates the index of the correct answer choice in the answers array.