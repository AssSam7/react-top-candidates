import { Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/home/home.component";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/:id" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
