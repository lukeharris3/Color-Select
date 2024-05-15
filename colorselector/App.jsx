import { Routes, Route } from "react-router-dom";
import Grey from "./components/grey";
import Blue from "./components/blue";
import Red from "./components/red";
import "./index.css";
import NavBar from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div id="container">
        <h1>React Router</h1>
        <NavBar />
        <div id="main-section">
          <Routes>
            <Route path={"/"} element={<Gray />} />
            <Route path={"/blue"} element={<Blue />} />
            <Route path={"/red"} element={<Red />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;