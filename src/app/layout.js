'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import 'tailwindcss/tailwind.css'
import Navbar from './components/Navbar/Navbar'
import { Provider } from 'react-redux';
import { store } from "@/redux/store";
import Footer from "./components/Footer/Footer";



const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <Provider store = {store}>
        <Navbar />
          {children}
          <Footer/>
        </Provider>

        <ToastContainer position='top-right' theme="colored"
          autoClose={2000} bodyClassName="toastBody"
        />
      </body>
    </html>
  );
}
