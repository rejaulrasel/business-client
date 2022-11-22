import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';


const AddService = () => {

    const history = useHistory();

    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/addproduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            if (result.insertedId) {
                alert('Your product added succesfully')
                reset();
                history.push('/home')
            }
        })
        
    };

    return (
        <div>
            <div className="container form text-center mx-auto my-4">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center align-items center flex-column w-50 text-center mx-auto">
                    <input className="mb-2" placeholder="Enter Name of the Product" {...register("product_name", { required: true, maxLength: 200 })} />

                    <input className="mb-2" placeholder="Enter Name of the Category" {...register("product_category", { required: true, maxLength: 200 })} />
                    
                    <input className="mb-2" placeholder="Enter Product Image url" {...register("img", { required: true, maxLength: 10000 })} />

                    <input className="mb-2" type="number" placeholder="Enter the Price" {...register("product_price", { required: true})} />

                    <input className="btn btn-secondary text-white" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;