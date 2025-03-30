import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useState } from "react";

function App() {
  const [loading, isLoading] = useState(true);

  setTimeout(() => isLoading(false), 5000);
  return loading ? (
    <div class="loader"></div>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
