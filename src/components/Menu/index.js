import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/leoflix-logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className='Menu'>
            <Link to='/'> 
                <img className='Logo' src={Logo} alt='Leoflix Logo'/>
            </Link>
            <Button as={Link} className='ButtonLink' to='/add/video'>
                New Video
            </Button>
        </nav>
    );
}

export default Menu; // necessary to import this component in other places
