import "./navbar.css"
import {
  faPerson,
   faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">LOGO</span>
        <div className="searchbar">
         <input type="text" placeholder="Search Anything" />
         <FontAwesomeIcon className="icon" icon={faSearch} />
        </div>
        <div className="navItems">          
          <button className="navButton1">Join as Pro</button>
          <button className="navButton"><FontAwesomeIcon className="icon" icon={faPerson} /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar