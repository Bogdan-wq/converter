import React from 'react'
import {connect} from 'react-redux'

const CourseItem = ({itemCurrency,courseRelatedToBase}) => {

    const {code,label} = itemCurrency;
    return (
        <tr>
            <th scope="code">{code}</th>
            <td>{label}</td>
            <td>{courseRelatedToBase[code]}</td>
        </tr>
    )
}


const mapStateToProps = ({courseRelatedToBase}) => {
   return {courseRelatedToBase}
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        itemCurrency:ownProps.itemCurrency
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CourseItem);