  import React from 'react';
  import { Alert } from '@mui/material';

  const ViewProducts = ({product,updateProduct,deleteProduct}) => {
    console.log(product)
      return (
        <div className="col-12 col-md-4  mt-3 ">
        <div class="card container ">
            <img src={product.img} class="img-fluid " alt="..." />
            <div class="card-body">
                <h4 class="card-title text-center m-0  ">Name: {product.product_name}</h4>
                <h4 class="card-title text-center   ">Category: {product.product_category}</h4>
                
                <h3 class='text-center'> Price: <span style={{ color: "blue" }}>{product.product_price} Tk.</span></h3>
                <div className='d-flex'>
        <button onClick={()=>updateProduct(product._id)} className="btn btn-warning me-5">edit</button>
        <button onClick={()=>deleteProduct(product._id)} className="btn btn-danger">delete</button>
        
      </div>
                
                        
                  

            </div>
        </div>
    </div>  
            
          
      );
  };

  export default ViewProducts;


