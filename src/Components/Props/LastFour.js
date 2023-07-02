import React from 'react'
import { Link } from "react-router-dom";

function LastFour(props) {
    const {
      photoCover,
      textCollor,
      titleName,
      title,
      descriptionFirst,
      descriptionSec,
      learn,
      purchase,

    } = props;

  return (
    <>
 
        <div className={photoCover}>
            <div className={titleName}>{title} </div>
            <div className="description">
              {descriptionFirst}
              <br /> {descriptionSec}
            </div>
            <div className="links-wrapper p-2">
              <ul>
                <li className="d-inline-block ">
                  <Link to="">{learn}</Link>
                </li>
                <li className="d-inline-block ">
                  <Link to="">{purchase}</Link>
                </li>
              </ul>
            </div>

        </div>


    </>
  );
}

export default LastFour