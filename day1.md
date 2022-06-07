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

