import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { FilterState } from '../../interfaces/FilterState.interface';

function SearchInput() {
  const { setSearch } = useContext(MyContext) as FilterState;

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquise um modelo específico"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
