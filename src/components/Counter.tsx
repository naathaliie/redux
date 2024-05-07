import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        incrementByAmount
      </button>
    </div>
  );
};

export default Counter;
