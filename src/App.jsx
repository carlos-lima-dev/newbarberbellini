import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import "./App.css";
import Layout from "../src/components/layout/Layout";
import { Navigate } from "react-router-dom";
import InstallPrompt from "./components/InstallPrompt";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <InstallPrompt />
      </Layout>
    </Router>
  );
}

export default App;
