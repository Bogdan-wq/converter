import React from "react";

const transformCurrencies = (handlerToChangeState,labels) => {
    return labels.map((itemCurrencyLabel) => {
        const {label,code} = itemCurrencyLabel;
        return (
            <button
                className="dropdown-item"
                key={code}
                onClick={() => handlerToChangeState(code)}>
                <b className="mr-2">{code}</b>{label}
            </button>
        )
    })
}

export default transformCurrencies;