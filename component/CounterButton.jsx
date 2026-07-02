export default function CounterButtons({
  onIncrease,
  onDecrease,
  onReset,
  isDecreaseDisabled,
}) {
  return (
    <div>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease} disabled={isDecreaseDisabled}>
        Decrease
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}