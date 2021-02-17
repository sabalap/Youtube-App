import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar"
import RecommendedVideos from "./RecommendedVideos";
import { colors } from "@material-ui/core";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
      <p style={{ textAlign: "center", color: "black", fontWeight: "bold" }}>By Saba</p>
    </div>
  );
}

export default App;

