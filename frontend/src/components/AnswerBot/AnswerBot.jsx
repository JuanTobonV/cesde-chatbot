import './assets/styles/AnswerBot.css'
import chatbotIcon from '../assets/img/chatbotIcon.png'
import PropTypes from 'prop-types'

const AnswerBot = ({message}) => {

    return(
        <>
            <section className="message">
                <div>
                    <img className="chatbot__Icon" src={chatbotIcon} alt="" />
                </div>
                <div>

                    <div className="message_answer">
                        <p>
                            {message}
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