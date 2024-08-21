import React, { useState } from "react";

function SearchBar({ onSearch }) {
  let query = "";

  const handleInputChange = (e) => {
    query = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for"
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
export default SearchBar;
