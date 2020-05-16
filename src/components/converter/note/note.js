import React from 'react';
import date from "../../../apis/date-api";

const Note = () => {
    const {day,month,year} = date();

    return (
        <span className="small col-10 mt-4">
            По курсу <b>openexchangerates.org API</b> на {`${day}.${month}.${year}`}
        </span>
    )
}

export default Note;