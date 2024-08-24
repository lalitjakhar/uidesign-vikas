import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondDesign from "./component/seconddesign/SecondDesign";
import ThirdDesign from "./component/thirddesign/ThirdDesign";
import FourthDesign from "./component/fourthdesign/FourthDesign";
import HomePage from "./component/homepage/HomePage";
import FiveDesign from "./component/fivedesign/FiveDesign";

function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/second-design" element={<SecondDesign />} />
            <Route path="/third-design" element={<ThirdDesign />} />
            <Route path="/fourth-design" element={<FourthDesign />} />
            <Route path="/five-design" element={<FiveDesign />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
