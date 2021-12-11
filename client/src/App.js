import React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';

import ConfirmPayment from "./components/confirmPayment/ConfirmPayment";
import FailurePayment from "./components/failurePayment/FailurePayment";
import Home from "./components/home/Home";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirmpayment" element={<ConfirmPayment />} />
        <Route path="/failurepayment" element={<FailurePayment />} />
      </Routes>
    </div>
  );
}

export default App;
