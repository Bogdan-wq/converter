import React,{Fragment} from 'react'
import CourseBody from "../course-body";
import CourseToggler from "../course-toggler";

const Course = () => {
    return (
        <Fragment>
            <CourseToggler/>
            <CourseBody/>
        </Fragment>

    )
}

export default Course;