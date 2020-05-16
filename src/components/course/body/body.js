import React from 'react';
import CourseItem from "../course-item";



const BodyCourse = ({labels,course,currency}) => {

    const labelsCurrenciesJSX = labels ? labels.map((itemLabelCurrency) => {
        const {label} = itemLabelCurrency;
        return <CourseItem key={label}
                           itemLabelCurrency={itemLabelCurrency}
                           course={course}
                           currency={currency}/>
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