import PropTypes from 'prop-types'
import './assets/styles/Button.css'

function Button(props){
    return (
        <>
            <section>
                <div className='button'>
                    <p>
                        {props.typeButton}
                    </p>
                </div>
            </section>
        </>
    )
}

Button.propTypes = {
    typeButton:PropTypes.string.isRequired,
}

export default Button