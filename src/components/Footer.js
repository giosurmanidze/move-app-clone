import './styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer__div'>
      <div className="footer__btns">
        <button className='activee'>მთავარი</button>
        <button>კონტაქტი</button>
        <button>სამომხმარებლო შეთანხმება</button>
        <button>კონპიდენციალურობის პოლიტიკა</button>
      </div>
      <span className="copyright">© 2013-2022 adjaranet.com</span>
    </div>
  );
};

export default Footer;
