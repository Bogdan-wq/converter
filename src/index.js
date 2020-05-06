import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from "./components/context";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';


import './general.scss';


import Nav from "./components/nav";
import Converter from "./components/converter";
import Course from "./components/course";
import {filterCurrencyLabels} from "./currency-maintenance-api";




class App extends Component {

    state = {
        course:null,
        labelsForJSX:null
    }

    componentDidMount() {
        fetch('https://openexchangerates.org/api/latest.json?app_id=af16e48f8112433d88be8f40dac3ca2c')
            .then((res) => res.json())
            .then((res) => {
                const {rates} = res;
                const filteredCodes = filterCurrencyLabels
                    .map(itemCurrency => Object.values(itemCurrency)[1]);

                const filteredCurrencies = Object
                    .entries(rates)
                    .filter((currency) => filteredCodes.includes(currency[0]));


                this.setState({
                    course:Object.fromEntries(filteredCurrencies),
                    labelsForJSX:filterCurrencyLabels
                })
            })
    }

    render() {

        const { course,labelsForJSX } = this.state

        return (
            <div className="converter d-flex justify-content-center">
                <div className="converter__container ml-auto mr-auto w-100">
                    <Provider value={{
                        course,
                        labelsForJSX
                    }}>
                        <Router>
                            <Nav />
                            <Route path="/" exact component={() => <Converter course={course} />} />
                            <Route path="/course" component={() => <Course />} />
                        </Router>
                    </Provider>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));