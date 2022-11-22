import React, { useState, useEffect } from 'react';
import useFirebase from '../../Hooks/UseFirebase';
//import { useNavigate} from 'react-router-dom';

import AllProduct from './AllProduct';

const AllProducts = () => {
  const { users } = useFirebase()
  const [products, setproducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [])

  return (
    <div className='container mt-2'>
      <h1 className='text-center'>All Products</h1>
      <div className="row">
        {
          products.map((product) => {
            return <AllProduct key={product._id} product={product} />
          })
        }
      </div>




    </div>
  );
};

export default AllProducts;