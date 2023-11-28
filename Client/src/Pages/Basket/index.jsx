import { useBasket } from "../../Context/BasketContext";

export default function Basket() {
  const { basketItems, clearBasket,clearFromCart } = useBasket();

  return (
    <div>
      <h1>Cart</h1>
      <div>
        <button>Close</button>
        <button onClick={()=>clearBasket()}>clear basket</button>
      </div>
      <div className="d-flex">
        {basketItems.map((item) => (
          <div key={item.id}>
            <div >
              <div >
                <img src={item.movieImg} alt="" width="200px" />
                <h5>{item.movieTitle}</h5>
                <p>{item.moviePrice}</p>
                <p>quantity : {item.quantity}</p>
                <button onClick={()=>clearFromCart(item)}>clearFromCart</button>
              </div>
            </div>
            <div>
              <button
               
              >
                +
              </button>
              {/* <p>{item.quantity}</p> */}
              <button
                
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
