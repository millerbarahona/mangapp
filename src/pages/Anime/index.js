import React, { useState } from "react";
import ListOfAnimes from "../../components/ListOfAnimes";
import NavBar from "../../components/NavBar/index";
import { useAnimes } from "../../hooks/useAnimes";
import Typography from "@material-ui/core/Typography";
import Spinner from '../../components/Spinner'

export default function Anime() {
  const [title, setTitle] = useState("");
  const { loading, animes } = useAnimes({ title });
  const tipo='anime'

  return (
    <div className="container mx-auto">
      <NavBar position="static" estado={tipo}/>
      <div></div>
      <Typography variant="h6" className='text-white'>
        Ultima Busqueda
      </Typography>
      {loading? <Spinner/> : <ListOfAnimes animes={animes} />}
    </div>
  );
}
