import React from 'react'
import HallGirl from '../../assets/HallGirl.svg';
import style from '../../styles/styles.module.css';
import UsBenefits from '../UsBenfits';

export default function WhoWorking() {
  return (
    <section className={style.SectionHallGirl}>
        <h1>Cuide da sua <span>saúde</span></h1>
        <img src={HallGirl}/>
        <h2>Encontre seu <span>life style</span></h2>
        <section id='Benefits'>
          <UsBenefits/>
        </section>
    </section>
  )
}

