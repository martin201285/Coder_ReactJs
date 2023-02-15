import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./UserWidget.css"

export default function FavWidget (props) {
    return (
        <a className="icon__cart" href='#'><FontAwesomeIcon icon={faUser} /></a>
    )
}