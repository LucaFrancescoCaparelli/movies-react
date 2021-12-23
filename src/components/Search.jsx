import styles from './Search.module.css'
import {FaSearch} from 'react-icons/fa';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';
import { useQuery } from '../hooks/useQuery';

export function Search() {
  
  

  const history = useHistory();
  
  const query = useQuery();

  const search = query.get("search");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    //history.push(`/?search=${searchText}`)
  }


  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <div>
          <input value={search} placeholder="Title" aria-label="Search Movies" type='text' className={styles.searchInput} onChange={(e) => {
            const value = e.target.value;
            history.push(`/?search=${value}`)
          }} />
          <FaSearch size={20} color="#000000" className={styles.searchButton} />
        </div>
      </div>
    </form>
  );
}
