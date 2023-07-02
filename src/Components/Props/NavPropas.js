import React from 'react'
import { Link } from "react-router-dom";

function NavPropas(props) {
  const { link, linkname } = props;

  return (
    <>
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={link}>
          {linkname}
        </Link>
      </li>
    </>
  );
}

export default NavPropas