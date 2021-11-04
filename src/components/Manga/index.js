import React from "react";
import {Link} from 'react-router-dom'
import './estilos.css'
import StarIcon from '@material-ui/icons/Star';

export default function Anime({ mal_id, title, image_url, publishing, caps, score}) {

  const titleURL = title.replaceAll(' ', '-')
  return (
    <div className="">
      <Link to={`/Manga/${mal_id}/${titleURL}`}>
        <div className="mx-auto my-2 flex flex-col" >
          <h2 className="masonry-title mx-auto">{title}</h2>       
          <div className="-mb-2 rounded-lg contenedor">
          <h1>{mal_id}</h1>
            <div className="">
              <img src={image_url} alt={title} className="mx-auto rounded-lg"/>
              {publishing? <div className=" estado text-center bg-green-200 rounded-b-lg mt-2 w-full mb-0 bg-opacity-80">En Publicacion</div>:<div className="estado bg-opacity-80 text-center bg-red-200 mt-2 rounded-b-lg mx-auto">Finalizado</div>}
              <div className='puntaje rounded-t-lg px-3 text-white bg-gray-700 bg-opacity-80 text-sm'><StarIcon className='text-yellow-400'/>{score}</div>
              
            </div>            
          </div>
        </div>
      </Link>
    </div>
  );
}
