import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

  const [products, setProducts] = useProducts();
  const [cart, setCart] =useState([])


  useEffect(() =>{
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  },[products])



  const handleAddToCart = (selectedproduct) => {
    const exists = cart.find(product => product.id === selectedproduct.id);
    let newCart = [];
    if(!exists){
      selectedproduct.quantity = 1;
       newCart = [...cart, selectedproduct];
    }
    else{
      const rest = cart.filter(product => product.id !== selectedproduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedproduct.id);
  }

  return (
    <div className='shop-container'>
      <div className="product-container">
        {
          products.map(product => <Product 
            key={product.id}
            product={product}
            handleAddToCart = {handleAddToCart}
            ></Product>)
        }
      </div>
      <div className="cart-container">
       <Cart cart={cart}>
         <Link to="/orders">
           <button>Review Order</button>
         </Link>
       </Cart>
      </div>
    </div> 
  );
};

export default Shop;