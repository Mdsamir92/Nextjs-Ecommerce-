import React from 'react'
import {useEffect,useState} from 'react'
import axios from "axios";
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { ADD } from '@/redux/Actions/action';


function Product() {

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
  
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setMyData(response.data)
        setLoading(false)})
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

{isError !== "" && <h2>{isError}</h2>}
    
 {/* main  */}
 <section className="text-gray-600 body-font">

 <h1 className='py-4 text-red-500 text-2xl text-center mt-2'>{loading ? "Loading..." : "All Products"}</h1>
 <div className="container px-5 py-5 mx-auto">
     <div className="flex flex-wrap -m-4">
     {myData.slice(0,12).map((item, index) => {
      const { id, title, price,image } = item
             return (
                 <div key={index} className="p-4 w-full md:w-1/4">
                
                     <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                     <Link href={"productinfo/" + id}>
                             <img 
                                 className="lg:h-60  h-96 w-full"
                                 src={image}
                                 alt="blog"
                             />
                             </Link>
                         <div className="p-6">
                          
                             <h1 className="title-font text-md font-medium text-gray-900 mb-3">
                                 {title.substring(0, 25)}
                             </h1>
                             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                 ₹{price}
                             </h1>

                             <div className="flex justify-center ">
                            
                           <button onClick={() => addCart(item)}
                                     className="cart-btn bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                            Add to cart  </button>
                             </div>
                         </div>
                     </div>
                 </div>
             )
         })}
     </div>
 </div>
</section>



    </div>
  )
}

export default Product


