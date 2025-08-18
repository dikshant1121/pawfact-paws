import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Layout(){
    let {pathname}=useLocation()
        useEffect(()=>{
            window.scrollTo(0,0)
        },[pathname])
    return(
        <>
        <Header/>
        <Outlet/> 
        <Footer/>
        </>
    )
}