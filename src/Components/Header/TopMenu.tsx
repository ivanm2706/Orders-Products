import React, { useEffect, useState } from 'react'
import { getDate, getTime } from '../../utils/getTime';

function TopMenu() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <div className="header__date">
      <p className="header__dateTitle">Today</p>
      <div className="header__dateFullDate">
        <p className="header__fullDate">{getDate(currentTime)}</p>
        <div  className="icon" />
        <p className="header__time">{getTime(currentTime)}</p>
      </div>
    </div>
  )
}

export default TopMenu
