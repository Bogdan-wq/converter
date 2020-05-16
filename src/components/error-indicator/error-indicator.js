import React from 'react'

const ErrorIndicator = () => {
    return (
        <div className="fixed-height d-flex flex-column justify-content-center align-items-center">
            <h1 className="font-weight-light text-danger">Ошибка загрузки курса</h1>
        </div>
    )
}

export default ErrorIndicator;