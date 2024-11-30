import { useState } from 'react';
import cesde_logo from '../assets/img/logo-Cesde-2023.svg'
import './assets/styles/Main.css'

import AnswerBot from '../AnswerBot/AnswerBot'
import Question from '../Question/Question'
import MessageUser from '../messageUser/messageUser'
import Button from '../Button/Button'

function Main() {
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const [botMessage, setBotMessage] = useState('Hola! ¿Cómo puedo ayudarte?');


  const questions = [
    { id: 1, questionBody: "Pregunta#1" },
    { id: 2, questionBody: "Pregunta#2" },
    { id: 3, questionBody: "Pregunta#3" },
  ];

  const handleQuestionClick = (questionBody) => {
    setSelectedQuestion(questionBody);
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

          {selectedQuestion && (
            <>
              <MessageUser message={selectedQuestion} />
              <AnswerBot message={`Respuesta a: ${selectedQuestion}`} />
            </>
          )}

        </section>
        <div className='dashboard__buttons'>
          <Button typeButton='Hacer otra pregunta' />
          <Button typeButton='Salir'/>
        </div>
      </section>
    </section>
  );
}

export default Main;