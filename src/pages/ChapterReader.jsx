import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ChapterReader() {
  const { id } = useParams();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchChapterPages = async () => {
      try {
        const response = await axios.get(
          `https://api.mangadex.org/at-home/server/${id}`
        );
        const baseUrl = response.data.baseUrl;
        const pagePaths = response.data.chapter.data;

        const pageUrls = pagePaths.map(
          (pagePath) =>
            `${baseUrl}/data/${response.data.chapter.hash}/${pagePath}`
        );
        setPages(pageUrls);
      } catch (error) {
        console.error("Error fetching chapter pages:", error);
      }
    };

    fetchChapterPages();
  }, [id]);

  return (
    <div>
      {pages.map((page, index) => (
        <img key={index} src={page} alt={`Page ${index + 1}`} />
      ))}
    </div>
  );
}

export default ChapterReader;
