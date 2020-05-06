import React from 'react';
import convertValue from "../../../convert-function";



const BodyCourse = ({labels,course,currency}) => {

    const labelsCurrenciesJSX = labels ? labels.map((itemLabelCurrency) => {
        const {label,code} = itemLabelCurrency;
        return (
            <tr key={code}>
                <th scope="code">{code}</th>
                <td>{label}</td>
                <td>{convertValue(1,currency,code,course)}</td>
            </tr>
        )
    }) : null;


    return (
        <table className="table table-striped mt-3">
            <thead>
                <tr>
                    <th scope="col">Валюта</th>
                    <th scope="col">Название</th>
                    <th scope="col">Курс</th>
                </tr>
            </thead>
            <tbody>
                {labelsCurrenciesJSX}
            </tbody>
        </table>
    )
}

export default BodyCourse;