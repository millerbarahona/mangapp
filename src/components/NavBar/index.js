import React, { useState } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { useAnimes } from "../../hooks/useAnimes";
import { useMangas } from "../../hooks/useMangas";
import { Link, useLocation, useHistory } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import CameraOutlinedIcon from "@material-ui/icons/CameraOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  offset: theme.mixins.toolbar,
}));

export default function NavBar(props) {
  const estado = props.estado || 'anime'
  const [title, setTitle] = useState("");
    const { loading, animes } = useAnimes(estado==='anime'?{ title }:{...title}) //si el estado es anime se cambia al title nuevo, si no se deja el anterior
    const { loading1, mangas } = useMangas(estado==='manga'?{ title }:{...title}) //si el estado es manga se cambia al title nuevo, si no se deja el anterior
  //const [path, pushLocation] = useLocation();
  const {push} =useHistory() //para 
  const estilos = useStyles();
  const classes = useStyles();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTitle(evt.target.value);
    const estado = props.estado || 'anime'
    if(estado==='anime'){
      push(`/Anime/${title}`)
    }else if(estado==='manga'){      
      push(`/Manga/${title}`);
    }
  };
  const handleChange = (evt) => {
    const titulo= evt.target.value
    setTitle(titulo);
  };

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar className="container mx-auto">
          <Link to="/">
            <Typography variant="h6" color="inherit" className="cursor-pointer">
              MangApp
            </Typography>
          </Link>

          <div className={classes.search}>
            <form onSubmit={handleSubmit}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
              />
            </form>
          </div>

          <div className="flex flex-row-reverse w-full">
            <div className="">
              <Link to="/Manga" >
                <Typography variant="h6" color="inherit" className="cursor-pointer">
                  Manga
                </Typography>
              </Link>
              </div>
              <div className="w-4"></div>
              <div>
              <Link to="/Anime">
                <Typography variant="h6" color="inherit" className="cursor-pointer">
                  Anime
                </Typography>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={estilos.offset}></div>
    </div>
  );
}

