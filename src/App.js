import React, { useState } from "react";
import "./App.css";
import PayPal from "./components/PayPal";

function App() {
  const [checkout, setCheckOut] = useState(false);
  const price = 500;

  return (
    <div className="App">
      {checkout ? ( <PayPal price={price} /> ) : (

          <button onClick={() => {setCheckOut(true)}}>
            Checkout
          </button>
        )

      }
    </div>
  );
}

export default App;
