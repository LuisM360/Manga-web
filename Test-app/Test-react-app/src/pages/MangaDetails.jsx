import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function MangaDetails() {
  const { id } = useParams();
  const [manga, setManga] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchMangaDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.mangadex.org/manga/${id}`
        );
        setManga(response.data.data);
      } catch (error) {
        console.error("Error fetching manga details:", error);
      }
    };

    const fetchMangaChapters = async () => {
      try {
        const response = await axios.get(`https://api.mangadex.org/chapter`, {
          params: {
            manga: id,
            "translatedLanguage[]": "en", // Array format for language filtering
            "order[chapter]": "asc",
          },
        });
        setChapters(response.data.data);
      } catch (error) {
        console.error("Error fetching manga chapters:", error);
      }
    };

    fetchMangaDetails();
    fetchMangaChapters();
  }, [id]);

  if (!manga) return <p>Loading...</p>;

  return (
    <div>
      <h1>{manga.attributes.title.en}</h1>
      <p>{manga.attributes.description.en}</p>
      <h2>Chapters</h2>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link to={`/chapter/${chapter.id}`}>
              Chapter {chapter.attributes.chapter}: {chapter.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MangaDetails;
