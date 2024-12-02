import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Company from "./pages/Company";
import Header from "./components/Header";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Career from "./pages/Career";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="company" element={<Company />} />
          <Route path="career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
