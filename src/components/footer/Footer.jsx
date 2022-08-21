import './footer.css'
import Instragram from '../../assets/instagram.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Instragram} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="blur footer-blur"></div>
    </div>
  )
}

export default Footer