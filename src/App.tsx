import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index={true} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
