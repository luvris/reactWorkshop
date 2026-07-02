import { useState } from "react";
import StatusMessage from "../component/StatusMessage";
import CounterButtons from "../component/CounterButton";
import NameComponent from "../component/NameComponent";

function App() {
  const [counterNum, setCounterNum] = useState(0);
  const [nameInput, setNameInput] = useState("");

  function countNumber() {
    setCounterNum((prev) => prev + 1);
  }

  function decCountNumber() {
    setCounterNum((prev) => (prev > 0 ? prev - 1 : 0));
  }

  function resetCountNumber() {
    setCounterNum(0);
  }

  function updatName(e) {
    setNameInput(e.target.value);
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

      <NameComponent nameInput={nameInput} onInputChange={updatName} />
    </div>
  );
}

export default App;