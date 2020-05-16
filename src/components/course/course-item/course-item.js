import React from 'react';
import convertValue from "../../../apis/convert-api";

const CourseItem = ({currency,course,itemLabelCurrency}) => {
    const { label, code } = itemLabelCurrency;
    return (
        <tr>
            <th scope="code">{code}</th>
            <td>{label}</td>
            <td>{convertValue(1,currency,code,course)}</td>
        </tr>
    )
}

export default CourseItem;