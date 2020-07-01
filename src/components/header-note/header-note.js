import React from 'react'
import calendar from "../../images/calendar.png";
import date from "../../apis/date-api";


const HeaderNote = () => {
    const {day,month,year} = date();
    return (
        <div className="d-flex align-items-center">
            <span className="text-medium">{`${day}.${month}.${year}`}</span>
            <img src={calendar} alt="Calendar" className="ml-3"/>
        </div>
    )
}

export default HeaderNote;