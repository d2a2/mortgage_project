import { useState } from 'react';
import './menu.scss';
import '../../scss/base/common.scss';
import '../../scss/base/global.scss';
import '../../scss/helpers/null.scss';

import close from '../../svgicons/x.svg';
import logo from '../../img/logo.png';
import arrow from '../../svgicons/arrow.svg';

const Menu = () => {

  const [menuActive, setMenuActive] = useState(false);

    return (
<header className="header">
  <div className="header__container">
    <button onClick= {()=> setMenuActive(true)} type="button" className="menu-btn">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className={menuActive ? "menu--active" : "menu"}>
      <nav className="menu__body">
        <button onClick={()=> setMenuActive(false)} type="button" className="menu__close">
          <img src={close} alt="close"/>
        </button>
        <div className="menu__content">
          <a href="#" className="menu__logo logo">
            <img src={logo} alt="Logo"/>
          </a>
          <ul className="menu__list">
            <li className="menu__item"><a href="#" className="menu__link">Your teachers</a></li>
            <li className="menu__item"><a href="#" className="menu__link">Your mortgage journey</a></li>
            <li className="menu__item"><a href="#" className="menu__link">What our customers say</a></li>
            <li className="menu__item"><a href="#" className="menu__link">Blog</a></li>
            <li className="menu__item"><a href="#" className="menu__link">Ebook</a></li>
            <li className="menu__item"><a href="#" className="menu__link">Webinar</a></li>
          </ul>
          <div className="action">
            <a href="#" className="button">Get started
                <img src={arrow} alt="arrow"/>
            </a>
            <a href="#" className="button button--outline">Schedule a time</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>
    )
}
export default Menu;