import React from 'react';
import imageTopHall from '../../assets/imageTopHeader.svg';
import style from '../../styles/styles.module.css';
import MoreView from '../MoreView';
function Presentation() {
  return (
    <div>
      <div className={style.ContainerTitle}>
        <h1 className={style.Title}>
          Nome da sua academia <span>Seu slogan</span>
        </h1>
      </div>
      <div className={style.ContainerBanner}>
        <img
          src={imageTopHall} />
        <p>Lorem Ipsum is simply dummy text of tShe printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className={style.ButtonWhatsApp}>
        <p>Entre em contato</p>
        <button>WhatsApp</button>
      </div>
      <MoreView/>
    </div>
  )
}

export default Presentation