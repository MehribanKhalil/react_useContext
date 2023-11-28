import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductsCard from "../../Components/ProductsCard";
import { useBasket } from "../../Context/BasketContext";
import Basket from "../Basket";
import "./index.scss";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const {basketItems,addToCart}=useBasket()

  function getData() {
    fetch("http://localhost:3000/popularFilms")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
   <div>

    <h2>basket</h2>
    <Basket/>

    <h2 className="pt-5">Shop page</h2>
    <div className="cards_container container">
      <div className="row">
        {products &&
          products.map((cardProperty) => (
            <div className='col-12 col-md-4 col-lg-2'>
            <div className='popular_card_content'>

                <div className="popular_card_top">
                    <div className='popular_card_img'>
                        <img src={cardProperty.movieImg} alt="" />
                    </div>

                    <div className="popular_card_overlay">
                        <div className='card_overlay_btn'>
                           
                        </div>
                    </div>
                </div>



                <h6 className='popular_card_title'>{cardProperty.movieTitle}</h6>
                <button onClick={()=>addToCart(cardProperty)}>ADDDDD</button>
                <div className='popular_card_price'>
                    <span>$.{cardProperty.moviePrice}</span>
                    <span>{cardProperty.discountedPrice}</span>
                </div>
            </div>
        </div>
          ))}
      </div>
    </div>
   </div>
  );
};

export default Shop;
