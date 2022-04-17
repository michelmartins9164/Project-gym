import React from 'react';
import style from '../../styles/styles.module.css';
import DuoFriends from '../DuoFriends';

export default function GeralQuestions() {
  return (
    <section>
        <div className={style.ContainerQuestions}>
            <h1>Principais dúvidas</h1>
            <h2>Confira se sua dúvida pode ser respondida abaixo!</h2>
        </div>

        <div className={style.Details}>
            <details>
                <summary>“Posso cancelar a qualquer momento?”</summary>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </details>

            <details>
                <summary>“Como faço para entrar em uma das academias?”</summary>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </details>

            <details>
                <summary>“Como posso entrar em contato?”</summary>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </details>
        </div>
        <DuoFriends/>
    </section>
  )
}
