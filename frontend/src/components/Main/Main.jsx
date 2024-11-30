import React, { useState } from 'react';
import cesde_logo from '../assets/img/logo-Cesde-2023.svg'
import './assets/styles/Main.css'

import AnswerBot from '../AnswerBot/AnswerBot'
import Question from '../Question/Question'
import MessageUser from '../messageUser/messageUser'
import Button from '../Button/Button'

function Main() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [botMessage, setBotMessage] = useState('Hola! ¿Cómo puedo ayudarte?');

  const questions = [
    { id: 1, questionBody: "¿Cuales son las sedes del CESDE?" },
    { id: 2, questionBody: "¿Cuales son los números de atención del CESDE" },
    { id: 3, questionBody: "¿Qué es el CESDE?" },
    { id: 4, questionBody: "¿Cómo funcionan los créditos?" },

  ];

  const handleQuestionClick = (questionBody) => {
    setSelectedQuestions([...selectedQuestions, questionBody]);
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
              onClick={() => handleQuestionClick(question.questionBody)}
            />
          ))}
          <AnswerBot message={botMessage} />
          {selectedQuestions.map((question, index) => (
            <React.Fragment key={index}>
              <MessageUser message={question} />
              <AnswerBot message={`Respuesta a: ${question}`} />
            </React.Fragment>
          ))}
        </section>
        <div className='dashboard__buttons'>
          <Button typeButton='Salir'/>
        </div>
      </section>
    </section>
  );
}

export default Main;