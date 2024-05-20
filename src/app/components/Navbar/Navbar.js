'use client'
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { BsSearch } from 'react-icons/bs';
import { IoMdClose } from "react-icons/io";
import { useRouter } from 'next/navigation';
import axios from "axios"
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';


const Navbar = () => {

    // Search State 
    const [search, setSearch] = useState("");
    const [myData, setMyData] = useState([]);

    // Filter Search Data
    const filterSearchData = myData.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8)

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setMyData(response.data))

    }, []);

  
    // get user from localStorage 
    const user = (localStorage.getItem('users'));

    // CartItems
    const cartItems = useSelector((state) => state.cartreducer.carts);

    const router = useRouter();
    
    // logout function 
    const logout = async () => {
        const res = await axios.post("http://localhost:3000/api/users/logout")
        if (res.data ) {
            localStorage.clear('users');
            toast.success("logout successfully!")
            router.push("/login")
            
        }
    }

    const handleClose = () => {
        setSearch("");
    }


    return (
        <nav className="bg-pink-600 sticky top-0 z-20" >
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">


                <ul className=" flex  space-x-3 text-white font-medium text-md  text-center px-3 ">

                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    {/* Cart */}
                    <li className="px-2  text-white font-medium ">
                        <Link href={"/cart"}>
                            {user ? <li>Cart <sup> {cartItems.length} </sup></li> : ""}
                        </Link>
                    </li>
                    <li>
                        <p>{user}</p>
                    </li>

                </ul>
                <div className='w-72 sm:w-[300px] md:w-[25%] relative my-1 '>
                    <input className='border-gray-200 border p-2 px-2 mr-3 rounded-lg w-full' type="text" value={search} placeholder='Search your products' onChange={(e) => setSearch(e.target.value)} />
                    {
                        search === "" ? (<BsSearch className='cursor-pointer absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} />
                        ) : (<IoMdClose className='cursor-pointer absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} onClick={handleClose} />)
                    }
                </div>

                {/* search drop-down  */}
                <div className=" flex justify-center">
                    { search &&  <div className=" absolute bg-gray-200 w-50 md:w-50 lg:w-40 z-50 my-1 rounded-lg px-2 py-1">
                        {filterSearchData.length > 0 ?
                            <>
                                <IoMdClose className='cursor-pointer absolute right-0 top-0 mx-2 mt-2 text-gray-400' size={20} onClick={handleClose} />

                                {filterSearchData.map((item, index) => {
                                    return (
                                        <div onClick={() => router.push(`/productinfo/${item.id}`)} key={index} className="py-2 px-2 cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img className="w-10 " src={item.image} alt="" />
                                                <p className='text-xs'> {item.title.slice(0, 20)}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </>
                            :
                            <>
                                <div className="flex justify-center">
                                    <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                                </div>
                            </>}
                    </div>
                    }
                </div>
                <ul className='mx-3'>
                    {/* login */}
                    {!user ? <li>
                        <Link href={'/login'} className=" cursor-pointer  text-white font-medium">Login</Link>
                    </li> : ""}

                    {/* logout  */}
                    {user && <li className=" text-white font-medium cursor-pointer" onClick={logout}>Logout </li>}

                </ul>

            </div>
        </nav>



    );
}

export default Navbar;
