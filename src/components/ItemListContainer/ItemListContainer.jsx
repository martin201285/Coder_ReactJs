import React from 'react'
import "./ItemListContainer.css";

export const ItemListContainer = ({greeting}) => {
  return (
    <div className="list__container">
      <h2>{greeting}</h2>
    </div>
  )
}