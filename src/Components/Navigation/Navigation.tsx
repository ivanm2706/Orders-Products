import classNames from 'classnames'
import React from 'react'

const links = ['ПРИХОД', 'ГРУППЫ', 'ПРОДУКТЫ', 'ПОЛЬЗОВАТЕЛИ', 'НАСТРОЙКИ']

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {links.map(linkName => (
          <li className="nav__item" key={linkName}>
            <a
              href="#id"
              className={classNames({
                'nav__link': true,
                'nav__link--active': false,
              })}
            >
              {linkName}
            </a>
          </li>
        ))}        
      </ul>
    </nav>
  )
}

export default Navigation
