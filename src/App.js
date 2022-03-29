import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthApp from "./authenticated-app";
import Home from "./components/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/shelf" element={<AuthApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
