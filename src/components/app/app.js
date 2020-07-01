import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import FetchClient from "../../apis/fetch-client-api"
import currencies from "../../currency-maintenance";
import {connect} from 'react-redux';

import './app.scss';
import Header from "../header";
import {fetchCourseFail, fetchCourseSuccess} from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {Route} from "react-router";
import Converter from "../converter";
import Course from "../course";




class App extends Component {


    componentDidMount() {
        this.props.getCourse();
    }

    render() {
        const {loading,error,course} = this.props;

        const spinner = loading ? <Spinner/> : null;

        const errorIndicator = error ? <ErrorIndicator/> : null;

        const pages = course
            ? (
                <Fragment>
                    <Route path="/" component={Converter} exact/>
                    <Route path="/course" component={Course} />
                </Fragment>
            ) : null;


        return (
            <div className="app d-flex justify-content-center">
                <div className="app__container ml-auto mr-auto w-100">
                    <Header />
                    {spinner}
                    {errorIndicator}
                    {pages}
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({loading,error,course}) => {
    return {loading,error,course}
}


const mapDispatchToProps = (dispatch) => {
    return {
        getCourse:() => {
            const fetchClient = new FetchClient();
            fetchClient.getCourse()
                .then(({rates}) => {
                    const filteredCodes = currencies
                        .map(itemCurrency => Object.values(itemCurrency)[1]);

                    const course = Object
                        .entries(rates)
                        .filter((currency) => filteredCodes.includes(currency[0]));

                    return Object.fromEntries(course)

                })
                .then((course) => dispatch(fetchCourseSuccess(course)))
                .catch(() => dispatch(fetchCourseFail()))
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(App);