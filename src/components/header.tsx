import React from "react";

interface HeaderProps {
    catCount?: number;
    dogCount?: number;
}

const Header: React.FC<HeaderProps> = ({ catCount, dogCount }) => (
    <header className='header__container'>
        <h1 className='header__title header__welcome'>Welcome to React!</h1>
        {catCount && dogCount ? (
            <h2 className='header__title'>
                There are currently {catCount} Cats and {dogCount} Dogs in this Cat-Dog App
            </h2>
        ) : catCount ? (
            <h2 className='header__title'>
                There are currently {catCount} Cats in this Cat App
            </h2>
        ) : dogCount ? (
            <h2 className='header__title'>
                There are currently {dogCount} Dogs in this Dog App
            </h2>
        ) : (
            <h2 className='header__title'>
                No Cats or Dogs in this Cat App
            </h2>
        )}
    </header>
);

export default Header;
