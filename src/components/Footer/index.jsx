import React from 'react';
import style from '../../styles/styles.module.css';


import facebook from '../../icons/facebook.svg';
import twiter from '../../icons/twiter.svg';
import instagram from '../../icons/instagram.svg';

export default function Footer() {
  return (
    <div className={style.Footer}>
        <ol>
            <li><img src={facebook}/></li>
            <li><img src={twiter}/></li>
            <li><img src={instagram}/></li>
        </ol>
        <p>&copy; copyright 2022 MK</p>
    </div>
  )
}
