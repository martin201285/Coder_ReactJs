import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className='searchBar'>
        <input placeholder="Buscar" className="searchBar__input"></input>
        <div className="searchBar__icon">
            <a className="icon__cart" href='#'><FontAwesomeIcon icon={faMagnifyingGlass}/></a>
        </div>
    </div>
  )
}