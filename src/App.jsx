import React, { useState } from "react";
import "./Styles.css";

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div className="center">
      <div className="container">
     
        {print ? <h1 className="output">{data}</h1> : null}
        <input type="text" onChange={getData}  placeholder="Enter Text.."/>
        <button onClick={() => setPrint(true)}>Print Data</button>
      </div>
    </div>
  );
}

export default App;
