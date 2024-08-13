import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondDesign from "./component/seconddesign/SecondDesign";
import ThirdDesign from "./component/thirddesign/ThirdDesign";
import HomePage from "./component/homepage/HomePage";

function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/second-design" element={<SecondDesign />} />
            <Route path="/third-design" element={<ThirdDesign />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
