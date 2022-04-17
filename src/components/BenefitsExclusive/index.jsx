import React from 'react'
import style from '../../styles/styles.module.css';

export default function BenefitsExclusives() {
    const Benefits = [
        {
            id: 1,
            img: 'https://raw.githubusercontent.com/michelmartins9164/save-images/5b51cf22da7ffd58fe8f3cde9cf4a10cf18067d1/public/icons/Vectorglobal.svg',
            description: 'Encontre nossas filiais'
        },
        {
            id: 2,
            img: 'https://raw.githubusercontent.com/michelmartins9164/save-images/5b51cf22da7ffd58fe8f3cde9cf4a10cf18067d1/public/icons/Vectorcash.svg',
            description: 'Faça sua avaliação grátis'
        },
        {
            id: 3,
            img: 'https://raw.githubusercontent.com/michelmartins9164/save-images/5b51cf22da7ffd58fe8f3cde9cf4a10cf18067d1/public/icons/Unionofert.svg',
            description: 'Ofertas exclusivas'
        },
        {
            id: 4,
            img: 'https://raw.githubusercontent.com/michelmartins9164/save-images/5b51cf22da7ffd58fe8f3cde9cf4a10cf18067d1/public/icons/Vectorcard.svg',
            description: 'Aceitamos as principas bandeiras cartão'
        }
    ]
  return (
    <div className={style.ContainerArticleBenefits}>
        {Benefits.map((item) => {
            const {id, img, description} = item;
            return(
                <article key={id} className={style.ArticleBenefits}>
                    <div>
                        <img src={img} alt="Icon image"/>
                    </div>
                    <h2>{description}</h2>
                </article>
            )
        })}
    </div>
  )
}