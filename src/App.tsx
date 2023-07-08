import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment By Value
        </button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <div>{count}</div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
