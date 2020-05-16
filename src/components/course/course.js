import React,{Component} from "react";
import BodyCourse from "./body";
import DropdownCourse from "./toggler";
import {Consumer} from "../context";


export default class Course extends Component {


    state = {
        currency:"USD"
    }


    onSetAnotherCurrency = (currency) => {
        this.setState({ currency })
    }


    render() {

        const {currency} = this.state;

        return (
            <div className="mt-3 d-flex flex-column">
                <Consumer>
                    {
                        ({labels}) => {
                            return <DropdownCourse labels={labels}
                                                   currency={currency}
                                                   onSetAnotherCurrency={this.onSetAnotherCurrency}/>
                        }
                    }
                </Consumer>

                <Consumer>
                    {
                        ({labels,course}) => {
                            return <BodyCourse labels={labels}
                                               course={course}
                                               currency={currency}/>
                        }
                    }
                </Consumer>

            </div>
        )
    }
}