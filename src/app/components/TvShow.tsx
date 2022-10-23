import styled from 'styled-components';
import SearchInputs from './SearchShows';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import ShowListItem from './ShowListItem';

const Container = styled.div`
  
`

const CardContainer = styled.div`
    max-width: 1170px;
    width: 100%;
    margin: 10px 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;

    @media (max-width: 1183px) {
      grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 941px) {
      grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 711px) {
      grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 472px) {
      grid-template-columns: repeat(1, .5fr);
  }
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