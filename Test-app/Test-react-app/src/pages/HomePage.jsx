import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MangaList from "../components/MangaList";
import { searchManga } from "../api/mangadexApi";

function HomePage() {
  const [manga, setManga] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchManga(query);
    setManga(results);
  };
  return (
    <div>
      <h1>Manga Search</h1>
      <SearchBar onSearch={handleSearch} />
      <MangaList manga={manga} />
    </div>
  );
}
export default HomePage;
