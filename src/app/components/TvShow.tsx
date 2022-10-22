import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchInputs from './SearchShows';
import Loading from './Loading';

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

function TvShow() {
  return (
    <Container>
        <Header>
          <div>
            <HeaderText>TV SHOW SEARCH</HeaderText>
          </div>
        </Header>
        <SearchInputs />
        <Loading />
    </Container>
  )
}

export default TvShow