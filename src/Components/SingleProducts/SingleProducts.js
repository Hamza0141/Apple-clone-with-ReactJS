
import React, {useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import Pagenotfound from '../4o4/Pagenotfound';


function SingleProducts() {
const [products, setProducts] = useState([])
const { pid } = useParams()

  useEffect(() => {
    fetch("http://localhost:2023/iphones")
// fetch("/Datastorage.json") // if we store our returned database file in our project
  .then((response) => response.json())
  .then((files) => {
    const forproduct = files.products;
    const eachProduct = forproduct.filter(
      (product) => product.product_url === pid
    );
    setProducts(eachProduct);
 })
  .catch(() => {
    console.log("error : unable to fetch");
  });
  }, [pid]);

console.log(products);
if (products.length){
  return (
    <>
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {products.map((product) => {
              //   let id = product.product_url;
              //   let title = product.product_name;
              //   let img = product.product_img;
              //   let Brief = product.product_brief_description;
              //   let StartPrice = product.starting_price;
              //   let PriceRange = product.price_range;
              //   let productPage = "/iphone/" + id;
              //   let details = product.product_description;

              let productDiv = (
                <div key={product.product_id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">
                        {product.product_name}
                      </div>
                      <div className="brief-description">
                        {product.product_brief_description}
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${product.starting_price}`}
                      </div>
                      <div className="monthly-price">{product.price_range}</div>
                      <div className="product-details">
                        {product.product_description}
                      </div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={product.product_img} />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </div>
    </>
  );
}else{
    return<Pagenotfound/> }
}

export default SingleProducts