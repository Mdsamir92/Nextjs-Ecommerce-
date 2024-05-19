'use client'

import React from 'react'
import {useEffect,useState} from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { ADD } from '@/redux/Actions/action';




function page(props) {

    const [myData, setMyData] = useState([]);
    
    useEffect(() => {
      
        let productid = props.params.editproduct;
        let id = productid;
        axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .then((response) => setMyData(response.data))
          .catch((error) => setIsError(error.message));
      }, []);

      const cartItems = useSelector((state) => state.cartreducer.carts);
 
      const dispatch = useDispatch();
    
      const addCart = (item) => {
          dispatch(ADD(item));
          toast.success("Add to cart")
      }
    
      useEffect(() => {
          localStorage.setItem('cart',JSON.stringify(cartItems));
      }, [cartItems])
    

  return (
    <div>
     
   <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
    
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="">
                                <div className="">
                                    <img
                                        className=" w-full lg:h-[26em] rounded-lg"
                                        src={myData?.image}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                    {myData?.title}
                                    </h2>
            
                                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                    <span>₹ {myData?.price}</span>
                                    </p>
                                </div>
                             

                                <div className="mb-6 " />
                                <div className="flex flex-wrap items-center mb-6">

                                    <button    
                                    onClick={() => addCart(myData)}
                                        className="w-full px-4 py-3 text-center text-pink-600 bg-pink-100 border border-pink-600  hover:bg-pink-600 hover:text-gray-100 rounded-xl"
                                    >
                                        Add to cart
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
          
            </section>


    </div>
  )
}



export default page