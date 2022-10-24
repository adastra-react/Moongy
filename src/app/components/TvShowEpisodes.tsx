import styled from 'styled-components';
import { useSelector } from 'react-redux';
import EpisodeCard from './EpisodeCard';
import LoadingAnimation from './Loading'

const Container = styled.div`
    width: 400px;   
    max-width: 400px;
    height: 700px;
    overflow: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

function TvShowEpisodes() {
    const episodes = useSelector((state: any) => state.content.episodes);
    const episodesLoading = useSelector((state: any) => state.content.episodesLoading);
    
  return (
    <Container>
        {episodesLoading ? <LoadingAnimation /> : 
            episodes?.map((episode:any, index:any) => (
                <EpisodeCard key={index} episode={episode} />
            ))
        }
       
    </Container>
  )
}

export default TvShowEpisodes