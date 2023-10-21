import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";

const CartItems = ({ items }) => {

  const dispatch = useDispatch();
  const deleteFromCart = () => {
    dispatch(remove(items.id));
  };
  return (
    <div>
      <img className="w-10" src={items.image} alt="" />
      <p>{items.title}</p>
      <p>{items.description.slice(0, 20)}...</p>
      <p>{items.price}</p>
      <button className="bg-black text-white hover:bg-gray-800 rounded-lg px-3 py-2" onClick={deleteFromCart}>delete</button>
    </div>
  );
};

export default CartItems;
