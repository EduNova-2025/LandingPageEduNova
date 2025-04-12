import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import LandingPage from "./components/LandingPage";
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div>
      <LandingPage />
      <Header />
    </div>
  );
}

export default App;
