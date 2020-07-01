import React from 'react'
import CustomLink from "../custom-link";
import {withRouter} from "react-router-dom";

const Nav = (props) => {
    const {pathname} = props.location;
    return (
        <ul className="nav">
            <CustomLink to="/"
                        label="Конвертер"
                        pathname={pathname}/>
            <CustomLink to="/course"
                        label="Курс"
                        pathname={pathname}/>
        </ul>
    )
}






export default withRouter(Nav);