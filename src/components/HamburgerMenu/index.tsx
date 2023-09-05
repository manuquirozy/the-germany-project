import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`nav ${showMenu && 'nav--open'}`}>
      <button className={`nav__button ${showMenu && 'nav__button--open'}`} onClick={() => setShowMenu((prevState: boolean) => !prevState)}>
        {showMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
      {showMenu && (
        <nav>
          <ul>
            <li>
              <Link to='/' onClick={() => setShowMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/berlin' onClick={() => setShowMenu(false)}>
                Berlin
              </Link>
            </li>
            <li>
              <Link to='/freiburg' onClick={() => setShowMenu(false)}>
                Freiburg
              </Link>
            </li>
            <li>
              <Link to='/hamburg' onClick={() => setShowMenu(false)}>
                Hamburg
              </Link>
            </li>
            <li>
              <Link to='/munich' onClick={() => setShowMenu(false)}>
                Munich
              </Link>
            </li>
            <li>
              <Link to='/nuremberg' onClick={() => setShowMenu(false)}>
                Nuremberg
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
