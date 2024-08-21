import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MangaDetails from "./pages/MangaDetails";
import ChapterReader from "./pages/ChapterReader";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manga/:id" element={<MangaDetails />} />
        <Route path="/chapter/:id" element={<ChapterReader />} />
      </Routes>
    </Router>
  );
}

export default App;
