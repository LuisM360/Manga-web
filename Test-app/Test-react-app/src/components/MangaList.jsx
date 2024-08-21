import React from "react";
import { Link } from "react-router-dom";

function MangaList({ manga }) {
  return (
    <div>
      {manga.length > 0 ? (
        <ul>
          {manga.map((item) => (
            <li key={item.id}>
              <h3>
                <Link to={`/manga/${item.id}`}>{item.attributes.title.en}</Link>
              </h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>No manga found.</p>
      )}
    </div>
  );
}
export default MangaList;
