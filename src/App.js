import Anime from "./pages/Anime/index";
import Manga from "./pages/Manga/index";
import Home from "./pages/Home/index";
import SearchResults from "./pages/SearchResults";
import SearchMangas from "./pages/SearchResults/manga";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";

function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          
          <Route  path="/" exact><Home /></Route>
          <Route  path="/Manga/:mal_id/:title" ><Detail /></Route>
          <Route  path="/Anime/:title"  ><SearchResults /></Route>
          <Route  path="/Manga/:title"  ><SearchMangas /></Route>
          <Route  path="/Anime" ><Anime /></Route>
          <Route  path="/Manga" ><Manga /></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
