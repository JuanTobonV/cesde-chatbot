import './assets/style/Header.css'

import arrow_down from './assets/img/down-arrow.png'

import cesde_logo from '../assets/img/logo-Cesde-2023.svg'

function Header(){
    return(
        <>
            <nav>
                <div >
                    <img className='nav__img' src={cesde_logo} alt="" />
                </div>
                <div className='nav__links'>
                    <a href="">
                        
                        <p>Nosotros</p> 
                        <span><img src={arrow_down} alt="arrow" className="nav__arrow" /></span>
                    
                    </a>
                    <a href="">
                        <p>Empresas </p>
                         <span><img src={arrow_down} alt="arrow" className="nav__arrow" />
                         </span>
                         </a>
                    <a href="">
                        <p>Nuestros programas </p>
                         <span><img src={arrow_down} alt="arrow" className="nav__arrow" />
                         </span>
                         </a>
                    <a href="">
                        <p>eCesde</p>
                         <span><img src={arrow_down} alt="arrow" className="nav__arrow" />
                         </span>
                         </a>
                    <a href="">
                        <p>Escuelas </p>
                         <span><img src={arrow_down} alt="arrow" className="nav__arrow" />
                         </span>
                         </a>
                    <a href="">
                        <p>Sedes  </p>
                        <span><img src={arrow_down} alt="arrow" className="nav__arrow" />
                        </span>
                        </a>
                    <a href="">
                        <p>Nuestros Servicios </p>
                         <span><img src={arrow_down} alt="arrow" className="nav__arrow" />
                         </span>
                         </a>
                    <a href="">
                        <p>Contacto </p>
                         <span><img src={arrow_down} alt="arrow" className="nav__arrow" /></span></a>
                </div>
            </nav>
        </>
    )
}

export default Header