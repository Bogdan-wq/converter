import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from "./components/context";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';


import './general.scss';

import {currencyLabels} from "./currency-maintenance";
import FetchClient from "./apis/fetch-client-api";

import Nav from "./components/nav";
import Converter from "./components/converter";
import Course from "./components/course";
import Spinner from "./components/spinner";
import ErrorIndicator from "./components/error-indicator";





class App extends Component {

    state = {
        course:null,
        labels:null,
        error:false,
    }

    fetchClient = new FetchClient();

    componentDidMount() {
       this.fetchClient.getCourse()
            .then((res) => {
                const {rates} = res;
                const filteredCodes = currencyLabels
                    .map(itemCurrency => Object.values(itemCurrency)[1]);

                const filteredCurrencies = Object
                    .entries(rates)
                    .filter((currency) => filteredCodes.includes(currency[0]));

                this.setState({
                    course:Object.fromEntries(filteredCurrencies),
                    labels:currencyLabels
                })
            })
           .catch(() => {
               this.setState({
                   course:null,
                   error:true,
               })
           })
    }

    render() {

        const { course,labels,error } = this.state


        const content = course && !error
            ? (<Provider value={{
                    course,
                    labels
                }}>
                    <Router>
                        <Nav />
                        <Route path="/" exact component={() => <Converter course={course} />} />
                        <Route path="/course" component={() => <Course />} />
                    </Router>
                </Provider>)
            : null

        const spinner = !course && !error ? <Spinner /> : null

        const errorIndicator = !course && error ? <ErrorIndicator /> : null


        return (
            <div className="converter d-flex justify-content-center">
                <div className="converter__container ml-auto mr-auto w-100">
                    {content}
                    {spinner}
                    {errorIndicator}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));