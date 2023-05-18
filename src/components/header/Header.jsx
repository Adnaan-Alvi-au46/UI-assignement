import {
  faBed,
  faBedPulse,
  faHome,
  faHotel,
  faHouse,
  faPersonDigging,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";


const Header = ({ type }) => {
 

  return (
    <div className="header">
      <div className="headerContainer"  >
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHome} />
            <span>Interior</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPersonDigging} />
            <span>Civil engineers</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHouse} />
            <span>House service</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBedPulse} />
            <span>Airport taxis</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHotel} />
            <span>Flooring & carpet</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
