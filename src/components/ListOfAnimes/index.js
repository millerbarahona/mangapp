import React from "react";
import Anime from "../Anime/index";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './estilos.css'
export default function ListOfAnimes({ animes }) {
  let i=0
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 3,1100:4,1200:5 }} className="gap-2 mt-2">
      <Masonry className="sm:gap-2 mx-2 container mx-auto">
        {animes.map(({ mal_id, title, image_url}, index) => (
          
          <div key={index+1} className="border-2 mx-auto bg-gray-300 rounded-xl my-1">
            <Anime
            title={title}
            mal_id={mal_id}
            image_url={image_url}
            key={mal_id}
            className=""
          />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
