import React from "react";
import { Outlet } from "react-router";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

const Root =() =>{
    return(
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
);
};

export default Root;