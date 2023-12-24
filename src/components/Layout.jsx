import React from 'react';
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Why from "../pages/Home/Why/Why";
import Courses from "../pages/Home/Courses/Courses";
import Do from "../pages/Home/Do/Do";
import Events from "../pages/Home/Events/Events";
import Will from "../pages/Home/Will/Will";
import Blog from "../pages/Home/Blog/Blog";
import Miss from "../pages/Home/Miss/Miss";
import Footer from "./Footer";
import Enjoy from "../pages/Home/Enjoy/Enjoy";
import Online from "../pages/Home/ Online/Online";
import Team from "../pages/Home/Team/Team";
import Say from "../pages/Home/Say/Say";
const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Enjoy/>
            <Online/>
            <Why/>
            <Courses/>
            <Do/>
            <Events/>
            <Will/>
            <Team/>
                <Say/>
            <Blog/>
            <Miss/>
            <Footer/>
        </>
    );
};

export default Layout;