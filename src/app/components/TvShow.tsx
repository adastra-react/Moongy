import styled from 'styled-components';
import SearchInputs from './SearchShows';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import ShowListItem from './ShowListItem';
import { styled as materialStyled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Container = styled.div`
  
`

const CardContainer = styled.div`
    background-color: #f5f5f5;
    max-width: 1170px;
    width: 100%;
    margin: 10px 0;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 89px;
  background-color: #1C2544;
  div{
    width: 100%;
    max-width: 1170px;
  }
`
const HeaderText = styled.h1`
  color: #F6A951;
`

const ListContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  max-width: 100%;
  align-items: center;
  justify-content: center;
  align-self: center;
`

function TvShow() {
  const shows = useSelector((state: any) => state.content.shows);
  const loading = useSelector((state: any) => state.content.loading);

  return (
    <Container>
        <Header>
          <div>
            <HeaderText>TV SHOW SEARCH</HeaderText>
          </div>
        </Header>
        <SearchInputs />
          {loading ?
           <Loading /> :
           <ListContainer>
              <CardContainer>

              {shows?.map((show:any, index:any) => (
                <ShowListItem key={index} show={show} />
              ))}
              </CardContainer>
           </ListContainer>
          }
    </Container>
  )
}

export default TvShow