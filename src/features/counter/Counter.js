/*
useSelector - A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
useDispatch - A hook to access the redux dispatch function.
*/
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div className="counter_container">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default Counter;
