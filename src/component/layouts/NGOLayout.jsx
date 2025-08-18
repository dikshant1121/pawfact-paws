import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NGOHeader from "./NGOHeader";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function NGOLayout(){
    let isLogin=sessionStorage.getItem("isLogin")
        let userType=sessionStorage.getItem("userType")
        let nav=useNavigate()
        useEffect(()=>{
            if(!isLogin || userType!=2){
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
        <NGOHeader/>
        <Outlet/> 
        <Footer/>
        </>
    )
}