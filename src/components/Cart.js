import { useDispatch, useSelector } from "react-redux";
import { clearcart } from "../utils/CartSlice";
import ItemList from "./ItemList";
import { useState } from "react";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  //   const [cartTotal, setCartTotal] = useState(0);
  const handleClick = () => {
    dispatch(clearcart());
    // setCartTotal(0);
  };
  return (
    <div className="w-6/12 m-auto text-center my-10 p-10 border border-black shadow-md">
      <div className="flex justify-between border border-gray-300 p-4">
        <h1 className="text-xl font-bold"> Cart </h1>
        <button onClick={handleClick}>🗑️</button>
      </div>
      <div className="">
        <ItemList items={cart}></ItemList>
      </div>

      <div className="flex justify-between border border-gray-300 p-4">
        <h2>Total</h2>
        <h2>
          {/* {cart.map((item) => {
            setCartTotal(cartTotal + item?.card?.info?.price / 100);
          }) && cartTotal} */}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
