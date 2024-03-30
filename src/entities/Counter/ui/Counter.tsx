import { useCounterActions } from "../model/slice/counterSlice";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface ICounterProps {
  className?: string;
}

export const Counter: React.FC<ICounterProps> = () => {
  const counterValue = useCounterValue();

  const { increment, decrement, addNumber } = useCounterActions();

  function inc() {
    increment();
  }

  function dec() {
    decrement();
  }

  function add() {
    addNumber(5);
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

      <button onClick={add}>add</button>
    </>
  );
};
