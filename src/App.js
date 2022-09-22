import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextSubmitPage from "./pages/TextSubmitPage";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import NavbarComp from "./components/NavbarComp/NavbarComp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComp />
        <NavbarComp />
        <TextSubmitPage />

        {/* <Routes>    
          <Route path='/submit-text'   element={<TextSubmitPage />} /> {/* TextSubmitPage for entering text */}
        {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
