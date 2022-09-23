import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmitTextPage from "./pages/SubmitTextPage";
import DisplayGifPage from "./pages/DisplayGifPage";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import NavbarComp from "./components/NavbarComp/NavbarComp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComp />
        <NavbarComp />
        <Routes>    
          <Route path='/submit-text'   element={<SubmitTextPage />} /> {/* for submitting text to get GIF image*/}
          <Route path='/display-gif'   element={<DisplayGifPage />} /> {/* for displaying GIF image corresponding to submitted text */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
