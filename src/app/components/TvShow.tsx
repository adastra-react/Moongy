import styled from 'styled-components';
import SearchInputs from './SearchShows';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import ShowListItem from './ShowListItem';

const Container = styled.div`

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
              {shows.map((show:any, index:any) => (
                <ShowListItem key={index} show={show} />
              ))}
           </ListContainer>
          }
    </Container>
  )
}

export default TvShow