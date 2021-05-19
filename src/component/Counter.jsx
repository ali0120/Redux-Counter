import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREASE" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREASE" });
  };
  return (
    <div>
      <div>
        <button onClick={handleIncrement}>increment</button>
        {counter > 0 && <button onClick={handleDecrement}>decrement</button>}
      </div>
      <h2>{counter}</h2>
    </div>
  );
};
export default Counter;
