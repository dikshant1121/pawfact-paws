import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AdminLayout(){
     let isLogin=sessionStorage.getItem("isLogin")
        let userType=sessionStorage.getItem("userType")
        let nav=useNavigate()
        useEffect(()=>{
            if(!isLogin || userType!=1){
                toast.error("Please login")
                nav("/login")
            }
        },[])
        let {pathname}=useLocation()
            useEffect(()=>{
                window.scrollTo(0,0)
            },[pathname])
       
    return(
        <>
        <AdminHeader/>
        <Outlet/> 
        <Footer/>
        </>
    )
}