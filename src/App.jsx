import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import LandingPage from "./components/LandingPage";
import './App.css';
import Header from "./components/Header";
import GooeyFilter from "./components/GooeyFilter";

function App() {
  return (
    <div>
      <LandingPage />
      <Header />
      <GooeyFilter />
    </div>
  );
}

export default App;
