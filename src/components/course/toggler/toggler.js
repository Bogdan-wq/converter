import React from 'react'
import {transformDropdownCurrencies} from "../../../currency-maintenance-api";

const DropdownCourse = ({labels,currency,onSetAnotherCurrency}) => {

    const dropdownCurrencies = labels ? transformDropdownCurrencies(labels,onSetAnotherCurrency) : null;

    return (
        <div className="dropdown d-flex justify-content-end">
            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {currency}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {dropdownCurrencies}
            </div>
        </div>
    )
}

export default DropdownCourse;