import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counter";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterAction.increase());
  };
  const handleDecrement = () => {
    dispatch(counterAction.decrease());
  };
  const increaseByFife = () => {
    dispatch(counterAction.increament(5));
  };
  const toggleCounter = () => {
    dispatch(counterAction.toggleCounter());
  };
  return (
    <div>
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={increaseByFife}>increase by 5</button>
        {counter > 0 && <button onClick={handleDecrement}>decrement</button>}
      </div>
      <h2>{show && counter}</h2>
      <button onClick={toggleCounter}>toggle counter</button>
    </div>
  );
};
export default Counter;
