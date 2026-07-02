import { useState } from "react";
import NameInput from "../component/NameInput";
import AgeButton from "../component/AgeButton";
import AgeMessage from "../component/AgeMessage";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function nameChange(e) {
    setName(e.target.value);
  }

  function resetAll(){
    setAge(0);
    setName("");
  }

  function ageIncrease() {
    setAge((prev) => prev + 1);
  }

  function ageDecrease(){
    setAge((prev) => prev > 0 ? prev - 1 : prev = 0);
  }

  return (
    <div>
      <NameInput name={name} nameInputChange={nameChange} />
      <AgeButton onIncrease={ageIncrease} onDecrease={ageDecrease} onReset={resetAll} isDisabledDecrease={age === 0}/>
      <h2>
        you are {age} years old.
      </h2>
      <AgeMessage age={age}/>
    </div>
  );
}

export default App;