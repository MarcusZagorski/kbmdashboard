import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Expenses from "./pages/Expenses";
import { useState } from "react";

function App() {
  const [loading, isLoading] = useState(true);

  setTimeout(() => isLoading(false), 5000);
  return loading ? (
    <div className="loader"></div>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/expenses" element={<Expenses />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
