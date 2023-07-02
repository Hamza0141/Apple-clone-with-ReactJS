import React from 'react'
import { Link } from "react-router-dom";

function FirstThree(props) {
const { photoname, textname, titlename, title,title2, description, learn, purchase } =
  props;
  return (
    <>
      <section className="container-fluid">
        <div className={photoname}>
          <div className={textname}>
            <div className={titlename}>
              {title}
              <br /> {title2}
            </div>
            <div className="description ">{description}</div>
            <div className="links-wrapper p-2">
              <ul>
                <li className="d-inline-block ">
                  <Link to="">{learn}</Link>
                </li>
                <li className="d-inline-block">
                  <Link to="">{purchase}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstThree