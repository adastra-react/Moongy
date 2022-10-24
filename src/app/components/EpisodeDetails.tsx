import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaChevronLeft } from 'react-icons/fa';
import Loading from './Loading';


const Container = styled.div`
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 89px;
  background-color: #1C2544;
  > div{
    display: flex;
    align-items: center; 
    width: 100%;
    max-width: 1170px;
  }
`
const HeaderText = styled.h1`
  color: #F6A951;
  margin-left: 20px;
`

const ChevronLefticon = styled(FaChevronLeft)`
  color: #F6A951;
  font-size: 30px;

  &:hover{
    color: #cf8c40;
  }
`

const EpisodeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px !important;

  @media (max-width: 500px) {
    width: auto;
  }
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;

  @media (max-width: 808px) {
    flex-direction: column;
  }
`

const EpisodeImage = styled.img`
  margin: 0;
  padding: 0;
  width: 500px;
  /* margin: 10px; */

  @media (max-width: 500px) {
    max-width:100%;
    max-height:100%;
  }
`

const SummaryContainer = styled.div`
  overflow: scroll;
  width: 100%;

  > div{
    margin: 20px;
  }
`

const EpisodeTextContainer = styled.div`

  @media (max-width: 500px) {
    > h1{

      text-align: center;
    }
  }
`

function EpisodeDetails() {
  const { episodeId } = useParams();
  const navigate = useNavigate();
  const loading = useSelector((state: any) => state.content.loading);
  const [episode, setEpisode] = useState<any>({});

  const returnToTvShows = () => {
    navigate(-1);
  }

  //////////////////////////////////////////////
  // Get shows episodes by is from URL params //
  //////////////////////////////////////////////

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/episodes/${episodeId}`)
    .then((response) => {
      setEpisode(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [episodeId])

  return (
    <Container>
        <Header>
          <div>
          <ChevronLefticon onClick={returnToTvShows} />
            <HeaderText>EPISODE DETAILS</HeaderText>
          </div>
        </Header>
          {loading ?
            <Loading /> :
            <EpisodeContainer>
                <DetailsContainer>
                  <EpisodeTextContainer>
                  <EpisodeImage src={episode?.image?.medium} />
                    <h1 data-testid="episodeName" >{episode?.name}</h1>
                  </EpisodeTextContainer>
                  <SummaryContainer>
                      <div data-testid="episodeSummary" dangerouslySetInnerHTML={{__html: episode.summary}}></div>
                  </SummaryContainer>
                </DetailsContainer>
            </EpisodeContainer>
          }
    </Container>
  )
}

export default EpisodeDetails