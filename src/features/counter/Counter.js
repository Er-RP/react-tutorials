/*
useSelector - A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
useDispatch - A hook to access the redux dispatch function.
*/
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  dynamicAction,
} from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incAmount, setIncAmount] = useState(2);
  const [operation, setOperation] = useState("inc");
  return (
    <section>
      <p>count : {count}</p>
      <div className="ip_label_con">
        <label htmlFor="amount">Enter Amount</label>
        <input
          id="amount"
          type="number"
          value={incAmount}
          onChange={(e) => setIncAmount(e.target.value)}
        />
      </div>
      <div className="ip_label_con">
        {["inc", "dec", "reset"].map((op, i) => (
          <div key={i}>
            <input
              id={op + i}
              type="radio"
              value={op}
              checked={operation === op}
              onChange={(e) => setOperation(e.target.value)}
            />
            <label htmlFor={op + i} style={{ textTransform: "capitalize" }}>
              {op}
            </label>
          </div>
        ))}
      </div>
      <div className="counter_container">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(Number(incAmount)))}>
          IncrementBy{incAmount}
        </button>
        <button
          onClick={() =>
            dispatch(dynamicAction({ amount: Number(incAmount), operation }))
          }
          style={{ textTransform: "capitalize" }}
        >
          {operation}By{incAmount}
        </button>
      </div>
    </section>
  );
};

export default Counter;
