import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import LogoInHeader from '../logo-in-header/logo-in-header';
import './navbar.css';

const pagesInfo = [
    {page_name:'about us', link_to: '/about-us/', id: 1},
    {page_name:'education', link_to: '/education/', id:2},
    {page_name:'about us', link_to: '/about-us/', id: 3},
    {page_name:'about us', link_to: '/about-us/', id: 4},
    {page_name:'about us', link_to: '/about-us/', id: 5},
    {page_name:'about us', link_to: '/about-us/', id: 6},
]

const Navbar = () =>{
    const renderPages = () =>{
        return pagesInfo.map((item) => {
            const liStyle = selectedPage === item.id ? 'li-selected-navbar': 'li-not-selected-navbar';
            return(
                <Link to={item.link_to}>
                <li key={item.id} className={liStyle}
                onClick={() => setSelectedPage(item.id)}
                >
                    {item.page_name}
                </li>
                </Link>
            )
        })
    }
    const [selectedPage, setSelectedPage] = useState(0);
    return (
        <div className='row no-gutters navbar-wrapper'>
            <div className='col-1'></div>
            <div className='col-2'>
                <Link to='/' className='logo-in-navbar-link-wrapper'>
                    <div className='logo-in-navbar-wrapper'>
                        <LogoInHeader/>
                    </div>
                </Link>
            </div>
            <div className='col-5'>
                <ul className='ul-navbar list-unstyled'>
                    {renderPages()}
                </ul>
            </div>
            <div className='col-3'>1</div>
            <div className='col-1'>1</div>
        </div>
    )
}

export default Navbar;