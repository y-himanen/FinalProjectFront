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
                Week 1
            </a>
            <a className="menu-item" href="/Week2">
                Week 2
            </a>
        </Menu>
    );
};

