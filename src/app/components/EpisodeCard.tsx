import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  episode: any;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  margin: 10px 0;
  padding: 10px;
`

const EpisodeLinkText = styled(Link)`
  color: #1C2544;
  text-decoration: none;
  &:hover{
    color: #F6A951;
  }
`


function EpisodeCard(episode: Props) {
  return (
    <Container>
        <EpisodeLinkText to={`/episodes/${episode?.episode?.id}`}>{episode?.episode?.name}</EpisodeLinkText>
    </Container>
  )
}

export default EpisodeCard