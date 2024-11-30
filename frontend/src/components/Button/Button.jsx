import PropTypes from 'prop-types'
import './assets/styles/Button.css'

function Button(props){
    return (
        <>
            <section>
                <div className='button' onClick={props.onClick}>
                    <p>
                        {props.typeButton}
                    </p>
                </div>
            </section>
        </>
    )
}

Button.propTypes = {
    typeButton: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button