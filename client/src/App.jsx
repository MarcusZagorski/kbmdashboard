import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
