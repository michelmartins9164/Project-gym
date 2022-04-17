import React from 'react'
import style from '../../styles/styles.module.css';

import Friends from '../../assets/DuoFriends.svg';

function DuoFriends() {
  return (
    <div className={style.DuoFriends}>
        <img src={Friends}/>
        <h1>Procure uma de nossas filiais</h1>
    </div>
  )
}

export default DuoFriends