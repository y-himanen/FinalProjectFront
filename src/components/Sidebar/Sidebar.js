import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default props => {
    return (
        <Menu className='sidebar'>
            <br/>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/week1">
                Week 1
            </a>
            <a className="menu-item" href="/week2">
                Week 2
            </a>
            <a className="menu-item" href="/week3">
                Week 3
            </a>
        </Menu>
    );
};

