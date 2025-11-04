import React from "react";
import errorimg from "../assets/error-404.png"
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

const ErrorPage = () =>{
    return(
        <>
            <Navbar></Navbar>
                <div className="w-[500px] h-[500px] mx-auto mt-20">
                <img src={errorimg} alt="" />
                <h1 className="text-center text-5xl">Oops, page not found!</h1>
                <p className="text-center text-[20px] mt-2 text-[rgba(98,115,130,1)]">The page you are looking for is not available.</p>
                <button className="btn  bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)]  ml-44 mt-3.5 mb-20
                 text-white">Go Back!</button>
            </div>

            <div className="mt-20">
            <Footer></Footer>
            </div>
        </>
    );
};

export default ErrorPage;
