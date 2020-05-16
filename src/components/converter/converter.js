import React,{Component} from "react";
import InputBorrow from "./input-borrow";
import InputReceive from "./input-receive";
import Note from "./note";

import convertValue from "../../apis/convert-api";
import './converter.scss';
import arrows from '../../images/arrows.png';




export default class Converter extends Component {

    state = {
        from:"RUB",
        to:"UAH",
        amount:''
    }



    onChangeValue = (amount) => {
        this.setState({amount})
    }

    onSetFromCurrency = (from) => {
        this.setState({from})
    }

    onSetToCurrency = (to) => {
        this.setState({to:to})
    }

    onSwitchCurrencies = () => {
        this.setState((state) => {
            return {
                to:state.from,
                from:state.to,
            }
        })
    }

    render() {

    const {amount,from,to} = this.state;

    const {course} = this.props;

    const convertedAmount = !course || !amount ? '' : convertValue(amount,from,to,course);



    return (
        <div className="mt-5 d-flex flex-column align-items-center">

            <InputBorrow onChangeValue={this.onChangeValue}
                         onSetFromCurrency={this.onSetFromCurrency}
                         fromCurrency={from} />

            <div className="mt-4 mb-4 col-10">
                <img src={arrows} alt="Arrows" className="cursor-pointer" onClick={() => this.onSwitchCurrencies()}/>
            </div>


            <InputReceive convertedAmount={convertedAmount}
                          onSetToCurrency={this.onSetToCurrency}
                          toCurrency={to}/>

            <Note />
        </div>
        )
    }
}
