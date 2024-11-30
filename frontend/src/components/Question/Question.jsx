import PropTypes from 'prop-types'
import './assets/styles/Question.css'
//import axios from 'axios'


const Question = ({questionBody, onClick}) =>{
    return(
        <>
            <section>
                <div onClick={onClick} className='questionBody'>
                    {questionBody}
                </div>
            </section>
        
        </>
    )
}

    // let llamado = async (pregunta)=>{
    //     let url = "";
    //     try {
    //         let respuesa = await axios.post(url, pregunta);
    //         console.log(respuesa);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }




Question.propTypes = {
    questionBody: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Question