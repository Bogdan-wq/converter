import React from 'react'
import {changeBorrowInput, changeReceiveInput, changeFromCurrency} from "../../actions";
import {connect} from 'react-redux'
import fx from 'money';


const Borrow = (props) => {

    const { borrowInputValue,
            calculate,
            from,
            to,
            course,
            labels,
            changeCurrency
    } = props;


    return (
        <div className="d-flex align-items-end justify-content-between col-10">
            <div className="form-group mb-0">
                <label htmlFor="borrow">Меняю</label>
                <input type="number"
                       className="form-control border border-left-0 border-right-0 border-top-0 font-weight-bold text-medium"
                       id="borrow"
                       onChange={(e) => calculate(e.target.value,from,to,course)}
                       value={borrowInputValue}/>
            </div>
            <div className="dropdown dropright flex-fill d-flex justify-content-end">
                <button type="button" className="btn btn-outline-danger font-weight-bold dropdown-toggle w-75" data-toggle="dropdown">
                    {from}
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


const mapStateToProps = ({borrowInputValue,from,course,to,labels}) => {
    return {borrowInputValue,from,course,to,labels}
}

const mapDispatchToProps = (dispatch) => {
    return {
        calculate:(value,from,to,course) => {
            dispatch(changeBorrowInput(value))
            if(!value) {
                dispatch(changeReceiveInput(''))
            } else {
                fx.rates = course;
                const converted = fx.convert(parseInt(value,10),{from,to}).toFixed(2)
                console.log(converted)
                dispatch(changeReceiveInput(converted))
            }
        },
        changeCurrency:(currency) => {
            dispatch(changeFromCurrency(currency))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Borrow);