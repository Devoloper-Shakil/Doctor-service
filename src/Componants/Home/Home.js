import React from 'react';
import TopBar from "./TopBar";
import Header from './Header';
import Slider from "./Slider";
import Services from "./Services";
import About from "./About";
import Count from "./Count";
import Advice from "./Advice";
import Testimonials from "./Testimonials";
import Quertion from "./Quertion";
import Footer from "./Footer";




const Home = () => {
    return (
        <div>

            <TopBar></TopBar>
            <Header></Header>
            <Slider></Slider>
            <Services></Services>
            <About></About>
            <Count></Count>
            <Advice></Advice>
            <Testimonials></Testimonials>
            <Quertion></Quertion>
            <Footer></Footer>

            


        </div>
    );
};

export default Home;