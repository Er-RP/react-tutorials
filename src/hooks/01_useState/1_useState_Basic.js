import { useState } from "react";

const useStateBasic = () => {
  /* Initializing useState . useState always return array which is combination of  currentState [count],
  function [setCount] to change currentState . useState accepts one initialValue [0]*/
  const [count, setCount] = useState(0);
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

export default useStateBasic;
