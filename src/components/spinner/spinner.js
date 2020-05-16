import React from 'react'

const Spinner = () => {
    return (
        <div className="fixed-height d-flex flex-column justify-content-center align-items-center">
            <span className="spinner-grow text-danger"></span>
            <span>Загружаем курс...</span>
        </div>
    )
}

export default Spinner;