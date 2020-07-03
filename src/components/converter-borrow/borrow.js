import React from 'react'
import {setValueToConvert, changeFromCurrency, calculate} from "../../actions";
import {connect} from 'react-redux'
import transformCurrencies from "../../apis/transform-currencies";

const Borrow = (props) => {

    const { borrowInputValue, setValueToBorrowInput,
            from, labels, changeCurrency} = props;


    return (
        <div className="d-flex align-items-end justify-content-between col-10">
            <div className="form-group mb-0">
                <label htmlFor="borrow">Меняю</label>
                <input type="number"
                       className="form-control border border-left-0 border-right-0 border-top-0 font-weight-bold text-medium"
                       id="borrow"
                       onChange={(e) => setValueToBorrowInput(e.target.value)}
                       value={borrowInputValue}/>
            </div>
            <div className="dropdown dropright flex-fill d-flex justify-content-end">
                <button type="button" className="btn btn-outline-danger font-weight-bold dropdown-toggle w-75" data-toggle="dropdown">
                    {from}
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


const mapStateToProps = ({borrowInputValue,from,labels}) => {
    return {borrowInputValue,from,labels}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setValueToBorrowInput:(value) => {
            dispatch(setValueToConvert(value))
            dispatch(calculate())
        },
        changeCurrency:(currency) => {
            dispatch(changeFromCurrency(currency))
            dispatch(calculate())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Borrow);