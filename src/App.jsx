import { useState } from "react";

function App() {

  const [counterNum, setCounterNum] = useState(0);

  function countNumber() {
    setCounterNum(prev => prev + 1);
  }

  function decCountNumber() {
    if (counterNum > 0) {
      setCounterNum(prev => prev - 1)
    } else setCounterNum(0)
  }

  function resetCountNumber() {
    setCounterNum(0)
  }

  return (
    <>
      <div>
        <h1>
          Number of your clicks : {counterNum}
        </h1>
        <button onClick={countNumber}>
          Increase
        </button>
        <button onClick={decCountNumber} disabled={counterNum === 0}>Decrease</button>
        <button onClick={resetCountNumber}>
          Reset
        </button>

        {counterNum === 0 ? (<p style={{ color: 'red' }}>You have not clicked yet</p>) 
        : counterNum >= 1 && counterNum <= 9 ? <p style={{color : 'blue'}}>Keep clicking!</p> 
        : counterNum >= 10 ? <p style={{color:'green'}}>Wow! that's a lot</p> : <p></p>}

      </div>
    </>
  )

}

export default App;