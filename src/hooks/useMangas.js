import searchMangas from "../services/searchMangas";
import { useState, useEffect } from "react";

export function useMangas({ title } = { title: "avengers" }) {
  const [loading1, setLoading] = useState(false);
  const [mangas, setMangas] = useState([]);

  useEffect(
    function () {
      const titleToUse = title || localStorage.getItem("titleM") || "";      
      if (titleToUse.length > 3) {
        setLoading(true);
        searchMangas({ title: titleToUse }).then((mangas) => {
          setMangas(mangas);
          setLoading(false);
          if (title) localStorage.setItem("titleM", title);
        });
      }
    },
    [title, setMangas]
  );
  return { loading1, mangas };
} 