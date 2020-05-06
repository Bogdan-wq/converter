import React from 'react';
import convertValue from "../convert-function";

const filterCurrencyLabels = [
        {
            label:"Доллар США",
            code:"USD"
        },
        {
            label:"Украинская гривна",
            code:"UAH"
        },
        {
            label:"Российский рубль",
            code:"RUB"
        },
        {
            label:"Евро",
            code:"EUR"
        },
        {
            label:"Турецкая лира",
            code:"TRY"
        },
        {
            label:"Канадский доллар",
            code:"CAD"
        },
        {
            label:"Китайский юань",
            code:"CNY",
        },
        {
            label:"Японская иена",
            code:"JPY",
        },
        {
            label:"Швейцарский франк",
            code:"CHF",
        },
        {
            label:"Английский фунт стерлингов",
            code:"GBP",
        },
        {
            label:"Израильский шекель",
            code:"ILS",
        },
        {
            label:"Дирхам ОАЭ",
            code:"AED",
        },
        {
            label:"Польский злотый",
            code:"PLN",
        },
        {
            label:"Чешская крона",
            code:"CZK",
        },
        {
            label:"Шведская крона",
            code:"SEK",
        }
];

const filterCurrency = ["USD","UAH","RUB","EUR","TRY","CAD","CNY","JPY","CHF","GBP","ILS","AED","PLN","CZK","SEK"];


const transformDropdownCurrencies = (currencyLabels,handlerToChangeState) => {
    return currencyLabels.map((itemCurrency) => {
        const {label, code} = itemCurrency
        return (
            <button className="dropdown-item" key={code}
                    onClick={() => handlerToChangeState(code)}>
                <b>{code}</b> {label}
            </button>
        )
    })
}







export {transformDropdownCurrencies, filterCurrency, filterCurrencyLabels};

