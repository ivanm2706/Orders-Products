import React from 'react'
import Navigation from '../Navigation/Navigation'

function Menu() {
  return (
    <div className="menu">
      <img
        className="menu__avatar"
        src="./img/person.jpg"
        alt="person"
      />
      <button className="button button__circle button__setting"/>
      <Navigation />
    </div>
  )
}

export default Menu
