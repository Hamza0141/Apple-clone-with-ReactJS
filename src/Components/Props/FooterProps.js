import React from 'react'
import { Link } from "react-router-dom";

function FooterProps(props) {
    const { titleclass, title, link, linkname } = props;

  return (
    <>


          <h3>{title}</h3>
          
                <li>
                  <Link to= "/">{linkname}</Link>
                </li>
                


    </>
  );
}

export default FooterProps