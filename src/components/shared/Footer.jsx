import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg'
export const Footer = () => {
    return (
        <>

            <div className='bg-secondary-subtle'>
                <div className='w-75 m-auto d-flex justify-content-between align-items-center py-5'>
                    <div className='w-35'>
                        <h4 className='fw-3'>Subcribe our Newsletter</h4>
                        <span>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</span>
                    </div>

                    <div className='d-flex gap-3 align-items-center'>
                        <div className="input-group rounded-pill bg-white">
                            <input type="text" className="form-control bg-transparent border-0 py-2 f-input" placeholder="Your email address" aria-label="Recipient’s username" aria-describedby="button-addon2" />
                            <button className="btn btn-success rounded-pill py-2 px-3" type="button" id="button-addon2">Subscribe</button>
                        </div>

                        <div className='d-flex gap-1 fs-5'>
                            <i className="fa-brands fa-facebook-f me-2"></i>
                            <i class="fa-brands fa-twitter me-2"></i>
                            <i className="fa-brands fa-pinterest-p me-2"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div >
            <div className="bg-dark">
                <div className="w-75 m-auto">
                    <div className="mx-3 pt-5">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column gap-3 w-25">
                                <Link className="navbar-brand d-flex align-items-center gap-2 " to="">
                                    <img src={logo} alt="" />
                                    <span className='fs-3 text-white'>Ecobazar</span>

                                </Link>

                                <span className="text-secondary">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</span>
                                <div>
                                    <span className='text-white fw-4 me-1'>(219) 555-0114 </span>
                                    <span className='text-secondary me-1'>or </span>
                                    <span className='text-white'>Proxy@gmail.com </span>

                                </div>
                            </div>

                            <div className="text-light d-flex flex-column gap-2">
                                <span className="fw-bolder mb-2">My Account</span>
                                <span className="h-ele">My Account</span>
                                <span className="h-ele">Order History</span>
                                <span className="h-ele">Shoping Cart</span>
                                <span className="h-ele">Wishlist</span>
                            </div>

                            <div className="text-light d-flex flex-column gap-2">
                                <span className="fw-bolder mb-2">Helps</span>
                                <span className="h-ele">Contact</span>
                                <span className="h-ele">Faqs</span>
                                <span className="h-ele">Terms & Condition</span>
                                <span className="h-ele">Privacy Policy</span>
                            </div>

                            <div className="text-light d-flex flex-column gap-2">
                                <span className="fw-bolder mb-2">Proxy</span>
                                <span className="h-ele">About</span>
                                <span className="h-ele">Shop</span>
                                <span className="h-ele">Product</span>
                                <span className="h-ele">Track Order</span>
                            </div>

                            <div className="text-light d-flex flex-column gap-2">
                                <span className="fw-bolder mb-2">Categories</span>
                                <span className="h-ele">Fruit & Vegetables</span>
                                <span className="h-ele">Meat & Fish</span>
                                <span className="h-ele">Bread & Bakery</span>
                                <span className="h-ele">Beauty & Health</span>
                            </div>

                        </div>


                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-secondary fw-medium">Ecobazar eCommerce © 2021. All Rights Reserved</span>
                            <div className="text-light fs-2 my-4">
                                <i className="fa-brands fa-cc-apple-pay"></i>
                                <i className="fa-brands fa-cc-visa"></i>
                                <i className="fa-brands fa-cc-discover"></i>
                                <i className="fa-brands fa-cc-amazon-pay"></i>
                                <i className="fa-brands fa-cc-amex"></i>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}