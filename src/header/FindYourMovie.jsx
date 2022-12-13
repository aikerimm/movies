import { useCallback, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Button from '../util/Button';
import React from 'react';

const FindYourMovie = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(params.searchQuery);
  const [searchParams] = useSearchParams();

  const onSearchClick = useCallback(() => {
    navigate(`/search/${searchInput}?${searchParams.toString()}`);
  }, [navigate, searchParams, searchInput]);

  const handleInputChange = useCallback((e) => setSearchInput(e.target.value), []);

  const handleEnterOnSearch = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        onSearchClick();
      }
    },
    [onSearchClick]
  );

  return (
    <div className='findYourMovie'>
      <p className='titleText fullWidth'>Find your movie</p>
      <div className='search'>
        <input
          type='text'
          placeholder='What do you want to watch?'
          className='searchInput roundedCorners'
          value={searchInput}
          onChange={handleInputChange}
          onKeyDown={handleEnterOnSearch}
        ></input>
        <Button value='search' type='submit' onClick={onSearchClick} />
      </div>
    </div>
  );
};

export default React.memo(FindYourMovie);
