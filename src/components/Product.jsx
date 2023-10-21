import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
  };
  return (
    <div>
      <img className="w-20" src={post.image} alt={post.title} />
      <p>{post.title}</p>
      <p>{post.description}</p>
      <p>$ {post.price}</p>

      {cart.some((p) => p.id === post.id) ? (
        <button
          onClick={removeFromCart}
          className="bg-black text-white hover:bg-gray-800 rounded-lg px-3 py-2"
        >
          remove from cart
        </button>
      ) : (
        <button
          onClick={addToCart}
          className="bg-green-400 hover:bg-green-500 rounded-lg px-3 py-2"
        >
          add to cart
        </button>
      )}
    </div>
  );
};

export default Product;
