import { useState } from "react";
import StatusMessage from "../component/StatusMessage";
import CounterButtons from "../component/CounterButton";

function App() {
  const [counterNum, setCounterNum] = useState(0);

  function countNumber() {
    setCounterNum((prev) => prev + 1);
  }

  function decCountNumber() {
    setCounterNum((prev) => (prev > 0 ? prev - 1 : 0));
  }

  function resetCountNumber() {
    setCounterNum(0);
  }

  return (
    <div>
      <h1>Number of your clicks : {counterNum}</h1>

      <CounterButtons
        onIncrease={countNumber}
        onDecrease={decCountNumber}
        onReset={resetCountNumber}
        isDecreaseDisabled={counterNum === 0}
      />

      <StatusMessage counterNum={counterNum} />
    </div>
  );
}

export default App;