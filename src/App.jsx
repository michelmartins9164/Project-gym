import React from 'react'
import Footer from './components/Footer';
import GeralQuestions from './components/GeraQuestions';
import Header from './components/Header';
import Teaching from './components/Teaching';
import WhoWorking from './components/WhoWorking';
import YoursBenefits from './components/YoursBenefits';
import style from './styles/styles.module.css';

export default function App() {
  return (
    <div className={style.Co}>
      <Header/>
      <main>
        <WhoWorking/>
        <YoursBenefits/>
        <Teaching/>
        <GeralQuestions/>
      </main>
      <footer>
        <Footer/>
      </footer>
      </div>
  )
}
