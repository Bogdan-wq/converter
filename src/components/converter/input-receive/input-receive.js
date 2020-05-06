import React,{Component} from 'react';
import {transformDropdownCurrencies} from "../../../currency-maintenance-api";

export default class InputReceive extends Component {


    loseFocus = (e) => {
        e.target.blur();
    }

    render() {

        const {convertedAmount,labels,toCurrency} = this.props;

        const dropdownCurrencies = labels ? transformDropdownCurrencies(labels,this.props.onSetToCurrency) : null;


        return (
            <div className="d-flex align-items-end justify-content-between col-10">
                <div className="form-group mb-0">
                    <label htmlFor="receive">Получаю</label>
                    <input type="number"
                           className="form-control border border-left-0 border-right-0 border-top-0 font-weight-bold text-medium"
                           id="receive"
                           onFocus={(e) => this.loseFocus(e)}
                           onChange={() => {}}
                           value={convertedAmount}/>
                </div>
                <div className="dropdown dropright flex-fill d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-danger font-weight-bold dropdown-toggle w-75" data-toggle="dropdown">
                        {toCurrency}
                    </button>
                    <div className="dropdown-menu overflow-auto fixed-height">
                        {dropdownCurrencies}
                    </div>
                </div>
            </div>
        )
    }
}
