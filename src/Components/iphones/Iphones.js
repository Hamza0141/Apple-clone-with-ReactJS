import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphones() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2023/iphones/") // when our database running
      // fetch("/Datastorage.json")// if we store our returned database file in our project
      .then((response) => response.json())
      .then((files) => {
        const forproduct = files.products;
        setproduct(forproduct);
      })
      .catch(() => {
        console.log("error : unable to fetch");
      });
  }, []);

  let order = 2;
  console.log(product);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {product?.map((data) => {
            let id = data.product_url;
            let title = data.product_name;
            let img = data.product_img;
            let Brief = data.product_brief_description;
            let StartPrice = data.starting_price;
            let PriceRange = data.price_range;


            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            let pDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="Ilinks-wrapper">
                    <ul>
                      <li>
                        <Link to={id}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
            return pDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphones;
