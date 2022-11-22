import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

//import useFirebase from '../Hook/useFirebase';

import ViewProducts from './ViewProducts';

const ViewProduct = () =>{
    const [products,setproducts]=useState([])
   
    
    const [loading,setLoading]=useState(true)
   // const history=useHistory()
   const history =useHistory();
  const {users}=useFirebase()
 // let  email=user.email
  console.log(users.email)
  

    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(res=>res.json())
        .then(data=>
          {
            //window.location('/viewproduct');
          setproducts(data)
          setLoading(false);
           
    })
    },[sessionStorage.getItem('email')])

  
    const deleteProduct=(id)=>{
        fetch(`http://localhost:5000/product/${id}`,{
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
           // console.log(data)
            const remainData=products.filter((pd=>pd._id!==id))
            setproducts(remainData);
           // console.log(remainData)
        });
    }

    const updateProduct=(id)=>{
      //console.log(id)
      history.push(`/editproduct/${id}`)
      
    } 
    return (
       <div className='text-center bg-light'>
        <h1>Handle Product</h1>
        <div className='row container mx-5 px-5   '>

        {
              products.map((product)=>{
                return <ViewProducts updateProduct={updateProduct} deleteProduct={deleteProduct} key={product._id} product={product}/>
              })
          }



        </div>
              </div>
    );
};

export default ViewProduct;