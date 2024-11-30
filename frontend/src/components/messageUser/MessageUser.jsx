import './assets/style/MessageUser.css'
import userIcon from '../assets/img/user.png'
import PropTypes from 'prop-types'


const MessageUser = ({message}) => {
    return(
        <>
            <section className="messageUser">
                <div>
                    <img className="chatbot__Icon" src={userIcon} alt="" />
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

MessageUser.propTypes = {
    message: PropTypes.string.isRequired,
}


export default MessageUser