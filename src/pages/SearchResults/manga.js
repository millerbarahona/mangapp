import React from 'react'
import Spinner from '../../components/Spinner'
import ListOfMangas from '../../components/ListOfMangas'
import {useMangas} from '../../hooks/useMangas'
import NavBar from "../../components/NavBar/index";
import '../../components/ListOfAnimes/estilos.css'
import { useParams } from 'react-router';

export default function SearchMangas ({params}){
    const {title} = useParams()
    const {loading1, mangas} = useMangas({title})
    const tipo='manga'
    console.log();
    return <>
    <NavBar position="static" estado={tipo}/>
      {loading1
        ?<Spinner className='mt-2 mx'/>
        :<ListOfMangas  mangas={mangas}/>}
    </>
}