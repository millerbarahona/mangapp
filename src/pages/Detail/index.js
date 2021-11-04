import React, { useState, useEffect } from "react";
import SearchMangaById from "../../services/searchMangaById";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link, useHistory, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import StarIcon from '@material-ui/icons/Star';
import SearchCharactersM from '../../services/searchCharactersM'
export default function Detail({ params }) {
  const [manga, setManga] = useState([{},[]]);
  const [characters, setCharacters] = useState([])
  const mal_id = useParams().mal_id;
  const { goBack } = useHistory();
  const tipo = "manga";

  useEffect(function () {
    SearchMangaById({ mal_id: mal_id }).then((mangaRes) => {
      setManga(mangaRes);
    });
    SearchCharactersM({mal_id: mal_id, tipo:tipo}).then((mangaRes)=>{
      setCharacters(mangaRes)
    })
  }, []);

  function onclick() {
    goBack();
  }

  return (
    <div className="container mx-auto">
      <NavBar estado={tipo} />
      <ExitToAppIcon onClick={() => onclick()} />
      <div className="grid sm:grid-cols-3 mt-2 sm:gap-2  gap-2 mx-2 ">
        <div className='sm:col-span-3 bg-gray-400 rounded-lg text-xl justify-center flex '>
          <h1>{manga[0].title}</h1>
          
        </div>
        <div className=" max-h-full bg-gray-200 text-center p-4 sm:row-span-3 rounded-lg max-h-2 ">
          <hr />
          <img src={manga[0].image_url} alt="" className=" mx-auto" /> 
          <h1>{manga[0].score}</h1>
          <StarIcon/>         
          <hr />
        </div>
        <div className="bg-gray-200 sm:col-span-2 sm:p-3 flex flex-wrap  content-center rounded-lg">
          <div className="divide-y divide-blue-400 w-full">
            <div className="mb-1 text-center">
              <h1>Generos</h1>
            </div>
            <div className=" grid sm:grid-cols-4 sm:gap-2 grid-cols-3 gap-2 2xl:grid-cols-5  xl:grid-cols-6 lg:grid-cols-5 text-center justify-center">
              {manga[1].map((genero, index) => (
                <div className="bg-gray-300 rounded-lg m-1" key={index}>
                  <h1>{genero.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row-span-2 sm:col-span-2 bg-gray-200  p-4 flex flex-wrap  content-center rounded-lg">
          <div>
            <h1 className="text-xl">Sypnosis</h1>
            <p className="text-justify">{manga[0].synopsis}</p>
          </div>
        </div>
        <div className='bg-gray-200 rounded-lg max-h-72 overflow-y-scroll'>
          {characters.map((character)=>(
            <div className='flex flex-row my-2'>
              <a href={character.url} target="_blank"><img src={character.image_url} alt="" width='50px' className=' rounded-xl'/></a>
              <h1>{character.name}</h1>
              
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
