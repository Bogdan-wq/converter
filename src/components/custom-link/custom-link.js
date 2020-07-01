import {Link} from "react-router-dom";
import React from "react";

const CustomLink = ({to,pathname,label}) => {
    const clazz = to === pathname ? 'bg-danger text-white' : 'text-danger';
    return (
        <li className="text-medium nav-item">
            <Link to={to}
                  className={`nav-link border border-danger ${clazz}`}>
                {label}
            </Link>
        </li>
    )
}


export default CustomLink;