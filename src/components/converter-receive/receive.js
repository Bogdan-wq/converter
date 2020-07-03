import React from 'react'
import {connect} from "react-redux";
import {calculate, changeToCurrency} from "../../actions";
import transformCurrencies from "../../apis/transform-currencies";

const Receive = (props) => {

    const {receiveInputValue,to,
            labels,changeCurrency} = props

    return (
        <div className="d-flex align-items-end justify-content-between col-10">
            <div className="form-group mb-0">
                <label htmlFor="receive">Получаю</label>
                <input type="number"
                       className="form-control border border-left-0 border-right-0 border-top-0 font-weight-bold text-medium"
                       id="receive"
                       onFocus={(e) => e.target.blur()}
                       onChange={() => {}}
                       value={receiveInputValue}/>
            </div>
            <div className="dropdown dropright flex-fill d-flex justify-content-end">
                <button type="button" className="btn btn-outline-danger font-weight-bold dropdown-toggle w-75" data-toggle="dropdown">
                    {to}
                </button>
                <div className="dropdown-menu overflow-auto fixed-height">
                    {
                         transformCurrencies(changeCurrency,labels)
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({receiveInputValue,to,labels}) => {
    return {receiveInputValue,to,labels}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency:(currency) => {
            dispatch(changeToCurrency(currency))
            dispatch(calculate())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Receive);