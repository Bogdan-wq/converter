import React from 'react'
import arrows from '../../images/arrows.png'
import {switchCurrencies,calculate} from "../../actions";
import {connect} from "react-redux";

const Switch = ({switchCurrencies}) => {
    return (
        <div className="mt-4 mb-4 col-10">
            <img src={arrows}
                 alt="Arrows"
                 className="cursor-pointer"
                 onClick={switchCurrencies}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchCurrencies:() => {
            dispatch(switchCurrencies())
            dispatch(calculate())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Switch);