import { useState } from "react";
import "./App.css";

const App = () => {
  /* useState with object and array */

  const [simpleObject, setSimpleObject] = useState({ id: 1, name: "RP" });
  const [nestedObject, setNestedObject] = useState({
    id: 1,
    name: "RP",
    info: {
      age: 25,
      job: "none",
    },
  });
  const [simpleArray, setSimpleArray] = useState([1, 2, 3, 4]);

  //Function to change state
  const handleSimpleObject = () =>
    setSimpleObject((prevState) => ({ ...prevState, name: "Robiooo" }));
  const handleNestedObject = () =>
    setNestedObject((prevState) => ({
      ...prevState,
      info: {
        ...prevState.info,
        job: "Developer",
      },
    }));
  const handleSimpleArray = () =>
    setSimpleArray((prevState) => [...prevState, 4, 5, 6]);
  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: 40,
          gap: 60,
        }}
      >
        <button onClick={() => handleSimpleObject()}>Simple Object</button>
        <button onClick={() => handleNestedObject()}>Nested Object</button>
        <button onClick={() => handleSimpleArray()}>simple Array</button>
      </div>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: 40,
          gap: 60,
        }}
      >
        <div>Simple Object:{JSON.stringify(simpleObject)}</div>
        <div>Nested Object:{JSON.stringify(nestedObject)}</div>
        <div>Simple Array:{JSON.stringify(simpleArray)}</div>
      </div>
    </>
  );
};

export default App;
