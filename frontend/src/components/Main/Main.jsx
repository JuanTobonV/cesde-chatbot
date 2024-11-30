import React, { useState } from 'react';
import cesde_logo from '../assets/img/logo-Cesde-2023.svg'
import './assets/styles/Main.css'

import AnswerBot from '../AnswerBot/AnswerBot'
import Question from '../Question/Question'
import MessageUser from '../messageUser/messageUser'
import Button from '../Button/Button'

function Main() {
  const initialBotMessage = 'Hola! ¿Cómo puedo ayudarte?';
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [botMessage, setBotMessage] = useState(initialBotMessage);

  const questions = [
    { id: 1, questionBody: "¿Cuales son las sedes del CESDE?" },
    { id: 2, questionBody: "¿Cuales son los números de atención del CESDE?" },
    { id: 3, questionBody: "¿Qué es el CESDE?" },
    { id: 4, questionBody: "¿Cómo funcionan los créditos?" },
  ];

  const answers = [
    { id: 1, answerBody: "Nuestras direcciones son: Medellín: Calle 49 41 - 9, Bello: Diagonal 50a #38-20 (Tierragro), piso 5, Rionegro: Carrera  55A # 35-229 Parque de Comfama, La Pintada: Kilómetro 2 vía Puente Iglesias, Apartadó: Calle 104 101 - 15, Bogotá: AK 14 63-09, Cali: Calle 8 #37-38. Barrio Eucarístico, Pereira: Carrera19 #12-70. Megacentro Pinares -Universidad EAFIT Pereira." },
    { id: 2, answerBody: "Medellín Área Comercial: (60)(4) 2291100, Medellín Área Administrativa: (60)(4) 4808822, Bogotá: (60)(1) 4823318 - 322 395 4352, Cali: 310 2121384, Pereira: 310 2121359,  comunicaciones@cesde.edu.co" },
    { id: 3, answerBody: "Con presencia en: La Pintada, Rionegro, Apartadó, Cali, Pereira, Cartagena, Bello y Bogotá, marcamos un avance en nuestra misión de ofrecer formación ágil y de calidad, orientada a la creación y productividad. Conectamos talentos efectivos y procesos de aprendizaje que impulsan el desarrollo de cada sector productivo, forjando así un futuro donde el saber aplicado contribuye al progreso y evolución de nuestras comunidades." },
    { id: 4, answerBody: "¡Si! Tenemos crédito Comfama, con el cual puedes financiar hasta el 100% de los contenidos educativos de Cesde, con descuentos y tasas de interés especiales." },
  ];

  const handleQuestionClick = (question) => {
    const answer = answers.find(ans => ans.id === question.id);
    setSelectedQuestions([...selectedQuestions, { question: question.questionBody, answer: answer.answerBody }]);
  };

  const resetState = () => {
    setSelectedQuestions([]);
    setBotMessage(initialBotMessage);
  };

  return (
    <section className="main">
      <section className='main__dashboard'>
        <section className='dashboard__header'>
          <img className='dashboard__cesdeLogo' src={cesde_logo} alt="" />   
        </section>  
        <section className='dashboard__body'>
          {questions.map(question => (
            <Question 
              key={question.id} 
              questionBody={question.questionBody} 
              onClick={() => handleQuestionClick(question)}
            />
          ))}
          <AnswerBot message={botMessage} />
          {selectedQuestions.map((item, index) => (
            <React.Fragment key={index}>
              <MessageUser message={item.question} />
              <AnswerBot message={item.answer} />
            </React.Fragment>
          ))}
        </section>
        <div className='dashboard__buttons'>
          <Button typeButton='Salir' onClick={resetState} />
        </div>
      </section>
    </section>
  );
}

export default Main;