import React,{Component} from 'react';
import {Link} from  'react-router-dom';

import calendar from '../../images/calendar.png'

import date from "../../date-api";


export default class Nav extends Component {

    state = {
        page:'converter'
    }

    links = [
        { url: '/',nameOfPage:'converter',label:'Конвертер валют'},
        { url: '/course',nameOfPage:'course',label:'Курс'}
    ]

    onChangePage = (page) => {
        this.setState({page})
    }

    render() {

        const linksToJSX = this.links.map((itemLinks) => {
            const { url, nameOfPage,label} = itemLinks;

            const clazz = nameOfPage ===  this.state.page ? 'bg-danger text-white' : 'text-danger'

            return (
                <li className="text-medium nav-item" key={nameOfPage}>
                    <Link to={url} className={`nav-link border border-danger ${clazz}`} onClick={() => this.onChangePage(nameOfPage)}>{label}</Link>
                </li>
            )
        })

        const {day,month,year} = date();
        return (
            <div className="d-flex justify-content-between">
                <ul className="nav">
                    {linksToJSX}
                </ul>
                <div className="d-flex align-items-center">
                    <span className="text-medium">{`${day}.${month}.${year}`}</span>
                    <img src={calendar} alt="Calendar" className="ml-3"/>
                </div>
            </div>
        )
    }
}

