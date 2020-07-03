import React from 'react'
import Borrow from "../converter-borrow";
import Receive from "../converter-receive";
import Switch from "../converter-switch";
import FooterNote from "../converter-footer-note";
import './converter.scss';

const Converter = () => {
    return (
        <div className="mt-5 d-flex flex-column align-items-center">
            <Borrow />
            <Switch />
            <Receive/>
            <FooterNote/>
        </div>
    )
}

export default Converter;