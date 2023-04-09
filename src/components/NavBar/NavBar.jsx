import React from 'react'
import "./NavBar.css";

export const NavBar = ({links}) => {
  return (
    <ul className="menu__pages">
        {
            links && links.map((link) => {
                return (
                    <li className="pages__items"><a href="@">{link}</a></li>
                )
            })
        }
    </ul>
  )
}
