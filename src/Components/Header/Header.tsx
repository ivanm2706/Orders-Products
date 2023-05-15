import React from 'react'
import { useAppSelector } from '../../app/hooks'
import Search from './Search'
import TopMenu from './TopMenu'

function Header() {
  const active = useAppSelector(state => state.search.active);

  return (
    <header className="header">
      <div className="header__container">
        <img src="./img/logo.png" className="header__logo" alt='logo' />
        <p className="header__logoTitle">inventory</p>

        {active && <Search />}
      </div>
      <TopMenu />
    </header>
  )
}

export default Header
