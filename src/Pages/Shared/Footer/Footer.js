import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section id="contact" className="container foot mt-5">
                <hr />
                <div className="row py-5">
                    <div className="contact col-12 col-md-6 col-lg-4 text-start">
                        <h5 className="text-center fw-bolder text-success">PUPPY</h5>
                        <p className="low">- the Number one Dog shop around that brings all
                            inclusive well known Breeds authentic Dog straight into your location.</p>
                        <div className="">
                            <ul>
                                <li>www.facebook.com/nasif28</li>
                                <li>nasifzeehan1@gmail.com</li>
                                <li>70/K South Banasree, Dhaka-1219</li>
                                <li>+8801983794542</li>
                            </ul>
                        </div>
                    </div>

                    <div className="f-2 col-12 col-md-6 col-lg-4 d-flex">
                        <div className="info-1 col-6 col-md-6 col-lg-6">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h4 className="pb-3">Information</h4>
                                    <p> About Us</p>
                                    <p> Top Seller</p>
                                    <p> Our Office</p>
                                    <p> Services</p>
                                    <p> Pure Breed</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-2 col-6 col-md-6 col-lg-6">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h4 className="pb-3">My Account</h4>
                                    <p> My Account</p>
                                    <p> Discount</p>
                                    <p> Information</p>
                                    <p> My Address</p>
                                    <p> Breeds</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-4">
                        <img src={'https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?cs=srgb&dl=pexels-alexandru-rotariu-733416.jpg&fm=jpg'} width="100%" alt="" />
                    </div>
                </div>
            </section>


            <div className="rights">
                <p> &copy; Copyright 2021 PUPPY | All Rights Reserved | Designed, Developed & Maintained by Nasif Zeehan</p>
            </div>
        </div>
    );
};

export default Footer;