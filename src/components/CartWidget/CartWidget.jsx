import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import "./CartWidget.css"

export const CartWidget = () => {
    return (
        <a className="icon__cart" href='#'>
            <FontAwesomeIcon icon={faBagShopping} />
            <span className='icon__number'>3</span>
        </a>
    )
}