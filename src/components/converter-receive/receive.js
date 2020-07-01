import React from 'react'
import {connect} from "react-redux";
import {changeToCurrency} from "../../actions";

const Receive = ({receiveInputValue,to,labels,changeCurrency}) => {

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
                        labels.map((itemCurrencyLabel) => {
                            const {label,code} = itemCurrencyLabel;
                            return (
                                <button
                                    className="dropdown-item"
                                    key={code}
                                    onClick={() => changeCurrency(code)}>
                                    <b>{code}</b>{label}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        receiveInputValue: state.receiveInputValue,
        to:state.to,
        labels:state.labels,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency:(currency) => {
            dispatch(changeToCurrency(currency))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Receive);