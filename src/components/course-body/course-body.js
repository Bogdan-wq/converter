import React from "react";
import CourseItem from "../course-item";
import {connect} from "react-redux";

const CourseBody = ({labels}) => {
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
                {
                    labels.map((itemCurrency) => {
                        return <CourseItem key={itemCurrency.code}
                                           itemCurrency={itemCurrency}/>
                    })
                }
            </tbody>
        </table>
    )
}


const mapStateToProps = ({labels}) => {
    return {labels}
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseBody);
