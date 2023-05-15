import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom';

const links = [{
  name: 'ПРИХОД',
  link: 'orders',
}, {
  name: 'ГРУППЫ',
  link: 'grops',
}, {
  name: 'ПРОДУКТЫ',
  link: 'products',
}, {
  name: 'ПОЛЬЗОВАТЕЛИ',
  link: 'users',
}, {
  name: 'НАСТРОЙКИ',
  link: 'settings',
}];

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {links.map(({ name, link }) => (
          <li className="nav__item" key={name + link}>
            <NavLink
              to={`/${link}`}
              replace
              className={classNames({
                'nav__link': true,
                'nav__link--active': false,
              })}
            >
              {name}
            </NavLink>
          </li>
        ))}        
      </ul>
    </nav>
  )
}

export default Navigation
