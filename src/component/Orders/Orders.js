import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {

  const [products , setProducts] = useProducts();
  const [cart , setCart] = useCart(products);
  const navigate = useNavigate();



  const handleRemoveProduct = product => {
    const rest = cart.filter(pd => pd.id !==product.id);
    setCart(rest)
    removeFromDb(product.id);
  }


  return (
    <div className='shop-container'>
      <div className="review-item-container">
        {
          cart.map(product => <ReviewItem
          key={product.id}
          product={product}
          handleRemoveProduct= {handleRemoveProduct}
          ></ReviewItem>)
        }

      </div>
      <div className="cart-container">
        <Cart cart={cart}>
            <button onClick={() => navigate('/shipment')}>Proceed Shipping</button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;