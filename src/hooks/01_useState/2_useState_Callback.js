import { useState } from "react";

const sampleCallback = () => {
  console.log("Render on each rerender");
  return 0;
};

const App = () => {
  /* useState with slow computation .  we can also set initial value using the callback function.
  and initalValue doesn't calculate for each rerendering.*/

  //Render Once
  const [count, setCount] = useState(() => {
    console.log("Only render once on page load");
    return 0;
  });

  //Render Once
  // const [count, setCount] = useState(sampleCallback);

  //Render many-times
  // const [count, setCount] = useState(sampleCallback());

  //Function to change state
  const handleIncreaseCount = () => setCount((prevCount) => prevCount + 1);
  const handleDecreaseCount = () => setCount((prevCount) => prevCount - 1);
  return (
    <>
      <div className="App">
        <button onClick={() => handleIncreaseCount()}>+</button>
        <p>{count}</p>
        <button onClick={() => handleDecreaseCount()}>-</button>
      </div>
    </>
  );
};

export default App;
