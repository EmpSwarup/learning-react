import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decCount() {
    setCount(count - 1);
  }

  function incCount() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1 className="title">Counter</h1>
      <p className="desc">Number counter using useState</p>
      <button className="counter" onClick={decCount}>
        -
      </button>
      <span className="counterNo">{count}</span>
      <button className="counter" onClick={incCount}>
        +
      </button>
    </div>
  );
}

export default App;
