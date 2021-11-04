import React, { useState } from "react";
import ListOfMangas from "../../components/ListOfMangas";
import NavBar from "../../components/NavBar/index";
import { useMangas } from "../../hooks/useMangas";
import Typography from "@material-ui/core/Typography";
import Spinner from '../../components/Spinner'

export default function Manga() {
  const [title, setTitle] = useState("");
  const { loading1, mangas} = useMangas({ title });
  const tipo='manga'

  return (
    <div className="container mx-auto">
      <NavBar position="static" estado={tipo}/>
      <div></div>
      <Typography variant="h6" className='text-white'>
        Ultima Busqueda
      </Typography>
      {loading1? <Spinner/> : <ListOfMangas mangas={mangas} />}
    </div>
  );
}
