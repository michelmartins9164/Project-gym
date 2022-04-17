import React from 'react';
import style from '../../styles/styles.module.css';

import Teach1 from '../../assets/Teach1.svg';
import Teach2 from '../../assets/Teach2.svg';

export default function Teaching() {
  return (
    <section className={style.ContainerTeach}>
        <div className={style.ContainerTeachText}>
            <h1>Explore nossos métodos de ensino</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque illum, id hic numquam recusandae quia praesentium accusantium vel minima.</p>    
        </div>
        <div className={style.ContainerTeachImg}>
            <img src={Teach1} className={style.Teach1} alt="Image Teach" />
            <img src={Teach2} className={style.Teach2} alt="Image Teach" />
        </div>
    </section>
  )
}
