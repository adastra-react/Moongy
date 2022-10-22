import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setShows, shows } from '../redux/ShowsSlice';
import axios from 'axios';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 160px;
`

const SearchInput = styled.input`
  height:  45px;
  width: 100%;
  max-width: 1170px;
  border: 1px solid #000;
  padding: 0;
  outline: none;
`

const SearchButton = styled.button`
  height: 45px;
  width: 100%;
  max-width: 1170px;
  background-color: #1C2544;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border: none;
`

function SearchShows() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showList, setShowList] = useState([]);
  const shows = useSelector((state: any) => state.content.shows);
  const dispatch = useDispatch();
  
  const handleSearch = async (searchTerm:any) => {
    const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    dispatch(setShows(data));
    console.log(shows.show);
  }

  return (
    <div>
        <InputContainer>
            <SearchInput 
              type="text" 
              placeholder="Search for a TV show" 
              value={searchTerm}
              onChange={(e:any) => setSearchTerm(e.target.value)}
            />
            <SearchButton onClick={() => handleSearch(searchTerm)}>SEARCH</SearchButton>
        </InputContainer>
    </div>
  )
}

export default SearchShows