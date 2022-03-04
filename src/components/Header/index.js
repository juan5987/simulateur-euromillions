import React from 'react';
import logo from 'assets/images/stars_logo.png';
import logoReverse from 'assets/images/stars_logo_reverse.png';
import 'styles/header.scss';

const Header = () => {
    return (
        <header className='header'>
            <img className='header__logo' src={logoReverse} alt="logo représentant des étoiles jaunes" />
            <div className='header__container'>
                <h1 className='header__container__title'>Simulateur Euro Millions</h1>
                <h2 className='header__container__subtitle'>Vous ne gagnerez rien mais vous pourrez mesurer votre chance</h2>
            </div>
            <img className='header__logo' src={logo} alt="logo représentant des étoiles jaunes" />
        </header>
    )
}

export default Header