import React from 'react'
import buttonMenu from '../../icons/buttonMain.svg';
import close from '../../icons/iconClose.svg';
import style from '../../styles/styles.module.css';
function NavBar() {

    /* Functions the animation MenuBar */
    function ShowBarMenu() {
        const windowMenu = document.getElementById('ContentMenu');
        windowMenu.style.transform = 'translateY(200px)';
        windowMenu.style.transition = '.4s';
    }
    
    function CloseBarMenu() {
        const windowMenu = document.getElementById('ContentMenu');
        windowMenu.style.transform = 'translateY(-200px)';
        windowMenu.style.transition = '.4s';
    }

  return (
    <div className={style.ContainerNav}>
        <div className={style.MainNav}>
            <button onClick={ShowBarMenu} className={style.buttonMain}>
                <img src={buttonMenu} alt="Icon"/>
            </button>
        </div>
            <div className={style.ContentMenu} id="ContentMenu">
        <ol >
            <button onClick={CloseBarMenu} className={style.close}>
                <span>X</span>
                <img src={close}/>
            </button>
            <li>Home</li>
            <li>Como trabalhamos</li>
            <li>Beneficios exclusivos</li>
            <li>Beneficios exclusivos</li>
            <li>Nos contate</li>
            <li>Ensino</li>
        </ol>
            </div>
    </div>
  )
}

export default NavBar;