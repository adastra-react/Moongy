import {
  Routes,
  Route,
} from "react-router-dom";
import TvShow from "./app/components/TvShow";
import EpisodeDetails from "./app/components/EpisodeDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <TvShow/> } />
        <Route path="/episodes/:episodeId" element={ <EpisodeDetails/> } />
      </Routes>
    </div>
  )
}

export default App