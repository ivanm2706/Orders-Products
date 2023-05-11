import React, { useEffect, useState } from 'react'

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  const getDate = () => {
    
    return currentTime.toLocaleString(
      'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
    );
  };

  const getTime = () => {
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <header className="header">
      <div className="header__container">
        <img src="./img/logo.png" className="header__logo" alt='logo' />
        <p className="header__logoTitle">inventory</p>
      </div>
      <div className="header__date">
        <p className="header__dateTitle">Today</p>
        <div className="header__dateFullDate">
          <p className="header__fullDate">{getDate()}</p>
          <div  className="icon" />
          <p className="header__time">{getTime()}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
