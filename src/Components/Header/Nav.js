import React from "react";
import { Link } from "react-router-dom";
import search from "../../Resource/Images/Icon/SM/search-icon-sm.png";
import cart from "../../Resource/Images/Icon/SM/cart-sm.png";
import logo from "../../Resource/Images/Icon/SM/logo-sm.png";
import NavPropas from "../Props/NavPropas";

function Nav() {
  return (
    <>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <NavPropas link="/Mac" linkname="Mac" />
                <NavPropas link="/iphone" linkname="iphone" />
                <NavPropas link="/ipad" linkname="ipad" />
                <NavPropas link="/watch" linkname="watch" />
                <NavPropas link="/tv" linkname="tv" />
                <NavPropas link="/music" linkname="Music" />
                <NavPropas link="/support" linkname="Support" />

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search">
                    <img src={search} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart">
                    <img src={cart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

    </>
  );
}

export default Nav;
