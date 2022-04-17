import React from 'react'
import style from '../../styles/styles.module.css';
import arrowDown from '../../icons/arrow.svg';

export default function MoreView() {
    return (
        <div className={style.ContainerMoreView}>
            <h2>Veja mais</h2>
            <div className={style.ImgArrow}>
                <a href='#Benefits'><img src={arrowDown} alt="Icon arrow down" /></a>
            </div>
        </div>
    )
}

