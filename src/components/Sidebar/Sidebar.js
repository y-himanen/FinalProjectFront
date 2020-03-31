import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default props => {
    return (
        <Menu className='sidebar'>
            <br/>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/Week1">
                week 1
            </a>
            <a className="menu-item" href="/Week2">
                week 2
            </a>
            <a className="menu-item" href="/Week3">
                week 3
            </a>
        </Menu>
    );
};

