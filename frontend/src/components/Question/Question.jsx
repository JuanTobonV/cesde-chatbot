import PropTypes from 'prop-types'
import './assets/styles/Question.css'
//import axios from 'axios'


function Question(props){

    // let llamado = async (pregunta)=>{
    //     let url = "";
    //     try {
    //         let respuesa = await axios.post(url, pregunta);
    //         console.log(respuesa);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return(
        <>
            <section>
                <div className='questionBody'>
                    {props.questionBody}
                </div>
            </section>
        
        </>
    )
}

Question.propTypes = {
    questionBody: PropTypes.string.isRequired,
}

export default Question