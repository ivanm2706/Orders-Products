import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { change as actionSearch } from '../../feachers/searchReduser';

function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const hendlerChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
    dispatch(actionSearch(target.value));
  }

  return (
    <input
      type="text"
      className="input"
      placeholder="Поиск"
      value={value}
      onChange={hendlerChange}
    />
  )
}

export default Search
