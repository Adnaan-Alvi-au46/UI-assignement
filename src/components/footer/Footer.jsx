import "./footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">

          <li className="ft-logo">LOGO</li>
          <li  className="ft-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eum molestias aspernatur  pariatur delectus eveniet <br/> provident quod nam quas? Atque nulla sequi impedit<br/> alias iusto perspiciatis qui velit ratione obcaecati molestiae!</li>
          {/* <li><FontAwesomeIcon className="icon" icon={fatwi} /></li>         */}
          
        </ul>
        <ul className="fList">
          <li className="fListItem"><strong>Guideline</strong></li>
          <li className="fListItem">Privacy Policy</li>
          <li className="fListItem">Terms & conditions</li>
          <li className="fListItem">Blogs</li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><strong>Company</strong></li>
          <li className="fListItem">Abot Us</li>
          <li className="fListItem">Contact Us</li>
          <li className="fListItem">FAQ</li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><strong>Get In Touch</strong></li>
          <li className="fListItem">Location</li>
          <li className="fListItem">Contact Number</li>
          <li className="fListItem">Email</li>
        </ul>
      </div>
      {/* <div className="fText">Copyright © 2023 Adnaan Alvi.</div> */}
    </div>
  );
};

export default Footer;
