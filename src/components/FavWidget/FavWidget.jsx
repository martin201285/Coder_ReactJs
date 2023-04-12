import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "./FavWidget.css"

export const FavWidget = () => {
    return (
        <a className="icon__cart" href='#'><FontAwesomeIcon icon={faHeart} /></a>
    )
}