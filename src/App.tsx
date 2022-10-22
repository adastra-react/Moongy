import {
  Routes,
  Route,
} from "react-router-dom";
import TvShowEpisodes from "./app/components/TvShowEpisodes";
import TvShow from "./app/components/TvShow";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <TvShow/> } />
        <Route path="/episodes" element={ <TvShowEpisodes/> } />
      </Routes>
    </div>
  )
}

export default App