import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const AllProduct = ({product}) => {
  const history = useHistory()
  const buy = () => {
    alert('Product succesfully purchase')
  }

    return (
              
      <div className="col-12 col-md-4  mt-3 ">
            <div class="card container ">
                <img src={product.img} class="img-fluid " alt="..." />
                <div class="card-body">
                    <h4 class="card-title text-center   ">Name: {product.product_name}</h4>
                    <h4 class="card-title text-center   ">Category: {product.product_category}</h4>
                    
                    <h3 class='text-center'> Price: <span style={{ color: "blue" }}>{product.product_price} Tk.</span></h3>

                    
                            <button onClick={() => buy() } className="btn btn-danger">Buy Now
                            
                            </button>
                       

                </div>
            </div>
        </div>  
    );
};

export default AllProduct;