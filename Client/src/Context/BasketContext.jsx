import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  const addToCart = (item) => {
    const isItemInBasket = basketItems.findIndex((x) => x.id === item.id);

    if (isItemInBasket !== -1) {
      basketItems[isItemInBasket].quantity++;
      setBasketItems([...basketItems]);
    }
    else{
        setBasketItems([...basketItems, { ...item, quantity: 1 }])
    }
  };

//   const handleCounter=(val)=>{
//     if (val==='inc') {
        
//     } else if(val==='dec'){

//     }
    
//   }

  const clearFromCart=(item)=>{
    setBasketItems(
    basketItems.filter(x=>x.id !==item.id)
    )
  }

  const clearBasket=()=>{
    setBasketItems([])
  }



  return (
    <BasketContext.Provider value={{ basketItems, addToCart,clearBasket ,clearFromCart}}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;

export const useBasket = () => useContext(BasketContext);
