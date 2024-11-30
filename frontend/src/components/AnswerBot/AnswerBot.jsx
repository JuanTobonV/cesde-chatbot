import './assets/styles/AnswerBot.css'
import chatbotIcon from '../assets/img/chatbotIcon.png'
import PropTypes from 'prop-types'

function AnswerBot(props){


    return(
        <>
            <section className="message">
                <div>
                    <img className="chatbot__Icon" src={chatbotIcon} alt="" />
                </div>
                <div>

                    <div className="message_answer">
                        <p>
                            {props.message}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
AnswerBot.propTypes = {
    message: PropTypes.string.isRequired,
}

export default AnswerBot