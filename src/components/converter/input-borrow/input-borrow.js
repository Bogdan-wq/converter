import React,{Component} from 'react';
import withLabelsInput from "../../hoc-helper";
import {transformDropdownCurrencies} from "../../../currency-maintenance";


class InputBorrow extends Component {

    state = {
        inputValue:'',
    }

    onChangeInputValue = (e) => {
        const inputValue = e.target.value;
        this.props.onChangeValue(inputValue);
        this.setState({inputValue})
    }


    render() {
        let { inputValue } = this.state;

        const { labels,fromCurrency } = this.props;

        const dropdownCurrencies = labels ? transformDropdownCurrencies(labels,this.props.onSetFromCurrency) : null;

        return (
            <div className="d-flex align-items-end justify-content-between col-10">
                <div className="form-group mb-0">
                    <label htmlFor="borrow">Меняю</label>
                    <input type="number"
                           className="form-control border border-left-0 border-right-0 border-top-0 font-weight-bold text-medium"
                           id="borrow"
                           onChange={(e) => this.onChangeInputValue(e)}
                           value={inputValue}/>
                </div>
                <div className="dropdown dropright flex-fill d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-danger font-weight-bold dropdown-toggle w-75" data-toggle="dropdown">
                        {fromCurrency}
                    </button>
                    <div className="dropdown-menu overflow-auto fixed-height">
                        {dropdownCurrencies}
                    </div>
                </div>
            </div>
        )
    }
}








export default withLabelsInput(InputBorrow)



