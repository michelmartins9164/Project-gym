import React from 'react'
import style from '../../styles/styles.module.css';
export default function UsBenefits() {
    const Benefits = [
        {
            id: 1,
            description: 'Atendimento personalizado',
            img: 'https://raw.githubusercontent.com/michelmartins9164/save-images/ab5902243440937675e752e8bb8fc5d937f92d34/public/icons/target.svg'
        },
        {
            id: 2,
            description: 'Cadastro rápido',
            img: 'https://raw.githubusercontent.com/michelmartins9164/save-images/ab5902243440937675e752e8bb8fc5d937f92d34/public/icons/clock.svg'
        },
        {
            id: 3,
            description: 'Mais ecônomia',
            img: 'https://raw.githubusercontent.com/michelmartins9164/save-images/ab5902243440937675e752e8bb8fc5d937f92d34/public/icons/money.svg'
        },
        {
            id: 4,
            description: 'Tenha um plano próprio',
            img: 'https://raw.githubusercontent.com/michelmartins9164/save-images/ab5902243440937675e752e8bb8fc5d937f92d34/public/icons/calendar.svg'
        }
    ]
  return (
    <div>
        {Benefits.map((item) => {
            const { id, description, img } = item;
            return(
                <article key={id} className={style.Article}>
                    <h1>{description}</h1>
                    <div>
                        <img src={img} alt='icon card'/>
                    </div>
                </article>
            )
        })}
    </div>
  )
}
