import searchAnimes from "../services/searchAnimes";
import { useState, useEffect } from "react";

export function useAnimes({ title } = { title: "avengers" }) {
  const [loading, setLoading] = useState(false);
  const [animes, setAnimes] = useState([]);

  useEffect(
    function () {
      const titleToUse = title || localStorage.getItem("title") || "";
      if (titleToUse.length > 3) {
        setLoading(true);
        searchAnimes({ title: titleToUse }).then((animes) => {
          setAnimes(animes);
          setLoading(false);
          if (title) localStorage.setItem("title", title);
        });
      }
    },
    [title, setAnimes]
  );
  return { loading, animes };
} 
