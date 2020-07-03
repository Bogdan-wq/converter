import React from 'react'
import {connect} from 'react-redux'
import {calculateCourseTo, changeCourseBase} from "../../actions";
import transformCurrencies from "../../apis/transform-currencies";

const CourseToggler = ({labels,courseBase,changeCurrencyBase}) => {
    return (
        <div className="dropdown d-flex justify-content-end">
            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {courseBase}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                   transformCurrencies(changeCurrencyBase,labels)
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({labels,courseBase}) => {
    return {labels,courseBase}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrencyBase:(currency) => {
            dispatch(changeCourseBase(currency))
            dispatch(calculateCourseTo())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseToggler);