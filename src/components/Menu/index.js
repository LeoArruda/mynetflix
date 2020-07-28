import React from 'react';
import Logo from '../../assets/img/leoflix-logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'> 
                <img className='Logo' src={Logo} alt='Leoflix Logo'/>
            </a>
            <Button as='a' className='ButtonLink' href='/'>
                New Video
            </Button>
        </nav>
    );
}

export default Menu; // necessary to import this component in other places
