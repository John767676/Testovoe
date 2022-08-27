import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-top'>
                    <a className="header__logo" href="#">
                        <img className="header__logo-pic" src="https://svgshare.com/i/kD5.svg" alt="TESTTASK" />
                    </a>
                    <nav className="header__nav">
                        <ul className="header__buttons">
                            <li className="header__item">
                                <button className='header__button'>Users</button>
                            </li>
                            <li className="header__item">
                                <button className='header__button'>Sign up</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
                <div className='header-section'>
                    <div className="header-section__content">
                        <h1 className="header-section__header">Test assignment for front-end developer</h1>
                        <p className="header-section__description">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                        <button className="header-section__button">Sign up</button>
                    </div>
                </div>
        </header>
    );
};

export default Header;