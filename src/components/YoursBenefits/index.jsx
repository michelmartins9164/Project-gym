import React from 'react';
import style from '../../styles/styles.module.css';
import TrainnerBike from '../../assets/TrainnerBike.svg';
import GirlYoga from '../../assets/yoga.svg';
import BenefitsExclusives from '../BenefitsExclusive';
export default function YoursBenefits() {
    return (
        <section className={style.TrainnerCustom}>
            <h1>
                Treine de forma personalizada para um melhor desempenho!
            </h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
            <img src={TrainnerBike}/>
            <h2>
                Para todos os gostos
            </h2>
            <img src={GirlYoga}/>
            <button>
                Baixe Nosso E-book
            </button>
            <BenefitsExclusives/>
        </section>
    )
}
