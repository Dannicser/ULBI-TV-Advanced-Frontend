import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface ICounterProps {
  className?: string;
}

export const Counter: React.FC<ICounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  function inc() {
    dispatch(counterActions.increment());
  }

  function dec() {
    dispatch(counterActions.decrement());
  }

  return (
    <>
      <h1 data-testid={"value-title"}>{counterValue}</h1>
      <button data-testid={"dec-button"} onClick={dec}>
        dec
      </button>
      <button data-testid={"inc-button"} onClick={inc}>
        inc
      </button>
    </>
  );
};
