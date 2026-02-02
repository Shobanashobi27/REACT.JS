import { useState } from "react";
import "./App.css";

let App = () => {
  let [state, setState] = useState(0);

  function handleClick() {
    setState(state + 1);
  }

  return (
    <div>
      <form>
        <h1>{state}</h1>

        <button type="button" onClick={handleClick}>
          Increase
        </button>

        <button type="submit">Submit</button>

        <h3>Result:</h3>
      </form>
    </div>
  );
};

export default App;
