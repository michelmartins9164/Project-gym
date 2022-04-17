import React from 'react'
import NavBar from '../NavBar';
import Presentation from '../presentation';
import style from '../../styles/styles.module.css';

function Header() {
    return (
        <header className={style.Header}>
            <div>
                <NavBar />
            </div>
            <Presentation />
        </header>
    )
}

export default Header