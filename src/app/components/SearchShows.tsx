import { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setShows, setLoading } from '../redux/ShowsSlice';
import axios from 'axios';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 160px;
`

const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Search for a TV show',
})`
  height:  45px;
  width: 100%;
  max-width: 1170px;
  border: 1px solid #000;
  padding: 0;
  outline: none;
  text-align: center;
  &&::placeholder{
    padding: 10px;
  }
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
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.content.loading);
  
  const handleSearch = async (searchTerm:any) => {
    dispatch(setLoading(true));
    const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    dispatch(setShows(data));
    dispatch(setLoading(false));
  }

  return (
    <div>
        <InputContainer>
            <SearchInput
              value={searchTerm}
              onChange={(e:any) => setSearchTerm(e.target.value)}
            />
            <SearchButton onClick={() => handleSearch(searchTerm)}>SEARCH</SearchButton>
        </InputContainer>
    </div>
  )
}

export default SearchShows