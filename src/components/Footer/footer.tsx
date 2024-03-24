import './footer.css'
import instagram from './ico/003-instagram.png'
import facebook from './ico/006-facebook.png'
import whatsapp from './ico/005-whatsapp.png'
import mail from './ico/012-mail.png'
import logo from './logo_1_ch-bn.png'
import copyright from './ico/019-copyright.png'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'

const Footer = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-3 col-md-12 footerRedes">
                        <h3>Síguenos en nuestras redes sociales:</h3>
                        <ul>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener"><img
                                src={instagram} alt="instagram aqualife" /></a></li>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener"><img
                                src={facebook} alt="facebook aqualife" /></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-md-12 footerLogo">
                        <NavLink
                            to={'/'}>
                            <Box
                                component='img'
                                src={logo}
                                alt="scrool"
                            />
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-12 footerContacto">
                        <h3>Nuestros contactos:</h3>
                        <ul>
                            <li><a href="https://web.whatsapp.com/" target="_blank" rel="noopener"><img
                                src={whatsapp} alt="whatsapp aqualife" /></a></li>
                            <li><a href="https://gmail.com" target="_blank" rel="noopener"><img
                                src={mail} alt="mail aqualife" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 copyright">
                        <img src={copyright} alt="copyright aqualife" height="16" width="16" />
                        <h4>Copyright </h4>
                        <h6> - Todos los derechos reservados - 2024</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
