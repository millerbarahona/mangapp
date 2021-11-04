import React from 'react'
import Spinner from '../../components/Spinner'
import ListOfAnimes from '../../components/ListOfAnimes'
import {useAnimes} from '../../hooks/useAnimes'
import NavBar from "../../components/NavBar/index";
import '../../components/ListOfAnimes/estilos.css'
import { useParams } from 'react-router';

export default function SearchResults ({params}){
  
    const {title} = useParams()
    const {loading, animes} = useAnimes({title})
    const tipo='anime'
    console.log(title);
    return <>
    <NavBar position="static" estado={tipo}/>
      {loading
        ?<Spinner className='mt-2 mx'/>
        :<ListOfAnimes  animes={animes}/>}
    </>
}