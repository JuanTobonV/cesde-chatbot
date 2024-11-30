import cesde_logo from '../assets/img/logo-Cesde-2023.svg'
import './assets/styles/Main.css'

import AnswerBot from '../AnswerBot/AnswerBot'
import Question from '../Question/Question'
import Button from '../Button/Button'

function Main(){

    let questions = [
        {
        questionBody: "Pregunta#1"
        },
 
    ]

    let mensajes = [
        {
            message:"hola"

        }
    ]


    return(
        <>

            <section className="main">
                <section className='main__dashboard'>
                    
                    <section className='dashboard__header'>
                        <img className='dashboard__cesdeLogo' src={cesde_logo} alt="" />   
                    </section>  
    
                    <section className='dashboard__body'>

                      {
                        questions.map(question => (
                            <Question key={question.questionBody} questionBody={question.questionBody}/>
                        ))
                      }

                      {
                        mensajes.map(mensaje => (
                            <AnswerBot key={mensaje.message} message={mensaje.message}/>

                        )
                        )
                      }

                      


                    </section>  

                    <div className='dashboard__buttons'>
                          <Button typeButton='Hacer otra pregunta'/>
                          <Button typeButton='Salir'/>
                    </div>
                </section>
                
            </section>

        
        </>
    )
}

export default Main