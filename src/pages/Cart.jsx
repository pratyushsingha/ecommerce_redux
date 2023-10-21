import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmout] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmout(total);
  }, [cart]);
  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((items, index) => (
            <CartItems key={index} items={items} />
          ))}
          <div>
            <p>Your summary</p>
          </div>
          <div>
            <p>
              <span>total amount: </span>
              <span>{totalAmount}</span>
            </p>
          </div>
        </div>
      ) : (
        <>
          <p>cart is empty</p>
          <Link to="/">
            <button className="bg-black text-white hover:bg-gray-800 rounded-lg px-3 py-2">Shop now</button>
          </Link>
        </>
      )}
    </>
  );
};

export default Cart;
