import { CategorieCard } from "../CategorieCard/CategorieCard"
import "./Home.css"
import Fruit from "../../assets/Categories/Fresh Fruit.png"
import Vegetable from "../../assets/Categories/Fresh Vegetables.png"
import meatfish from "../../assets/Categories/Meat Fish.png"
import Snack from "../../assets/Categories/Snacks.png"
import Beverage from "../../assets/Categories/Beverages.png"
import BeautyHealth from "../../assets/Categories/Beauty Health.png"
import BreadBakery from "../../assets/Categories/Bread Bakery.png"
import BakingNeeds from "../../assets/Categories/Baking Needs.png"
import Cooking from "../../assets/Categories/Cooking.png"
import DiabeticFood from "../../assets/Categories/Diabetic Food.png"
import DishDetergent from "../../assets/Categories/Dish Detergents.png"
import Oil from "../../assets/Categories/Oil.png"


export const Home = () => {
    return (
        <>
        <div className="w-75 m-auto mt-4">
            <div className="d-flex gap-4 mb-4">
                <div className="w-75 bannerf-bg-img rounded-1 py-banner text-white">
                    <h2 className="w-h ms-5 mb-4">Fresh & Healthy Organic Food</h2>
                    <div className="ms-5 border-start border-success border-opacity-75 border-4 ps-1 mb-3">
                        <p className="fw-medium fs-6">Sale up to <span className="ms-2 bg-warning bg-gradient p-2 rounded-3">30% OFF</span></p>
                        <span className="small-text">Free shipping on all your order.</span>

                    </div>
                    <button className='btn btn-light text-success rounded-pill mt-4 py-2 px-4 ms-5 fw-medium'>Shop Now <i class="bi bi-arrow-right ms-3 fs-5"></i></button>
                </div>

                <div className="w-25 d-flex flex-column gap-3">
                    <div className="banners-bg-img w-100 p-2 rounded-2">
                        <div className="ms-3 d-flex flex-column">
                        <span className="fw-medium">Summer Sale</span>
                        <h2 className="fw-bolder">75% OFF</h2>
                        <span className="small-text">Only Fruit & Vegetable</span>

                        </div>
                        <div>

                        <button className="text-success fw-medium btn btn-link text-decoration-none ms-1">Shop Now <i class="bi bi-arrow-right ms-1 fs-5"></i></button>
                        </div>
                    </div>

                    <div className="bannert-bg-img w-100 position-relative d-flex justify-content-center align-items-center text-white rounded-2">
                        <div className="bg-black opacity-50 w-100 h-100 rounded-2">

                        </div>
                        <div className="position-absolute d-flex flex-column justify-content-center align-items-center text-center rounded-2">
                        <span className="fw-medium">Best Deal</span>
                        <h3 className="fw-bolder w-75">Special Products Deal of the Month</h3>
                        <button className="text-success fw-medium btn btn-link text-decoration-none ms-1">Shop Now <i class="bi bi-arrow-right ms-1 fs-5"></i></button>
                        </div>
                        
                    </div>
                </div>

                

            </div>

            <div className="py-4 mb-5 bg-white d-flex justify-content-around shadow-lg">
                <div className="d-flex align-items-center">
                    <i class="fa-solid fa-truck-fast text-success me-3 fs-4"></i>
                    <div className="d-flex flex-column">
                        <span className="fw-bolder">Free Shipping</span>
                        <span className="small-text text-secondary">Free shipping on all your order</span>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <i class="bi bi-headset text-success me-3 fs-1"></i>
                    <div className="d-flex flex-column">
                        <span className="fw-bolder">Free Shipping</span>
                        <span className="small-text text-secondary">Free shipping on all your order</span>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <i class="bi bi-bag-check text-success me-3 fs-2"></i>
                    <div className="d-flex flex-column">
                        <span className="fw-bolder">Free Shipping</span>
                        <span className="small-text text-secondary">Free shipping on all your order</span>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <i class="bi bi-box-seam text-success me-3 fs-2"></i>
                    <div className="d-flex flex-column">
                        <span className="fw-bolder">Free Shipping</span>
                        <span className="small-text text-secondary">Free shipping on all your order</span>
                    </div>
                </div>
            </div>

            <h3 className="mb-4">Popular Categories</h3>
            <div className="grid-categorie mb-5">
                <CategorieCard img={Fruit} text={"Fresh Fruit"} Category={"Fresh Fruit"}/>
                <CategorieCard img={Vegetable} text={"Fresh Vegetables"} Category={"Fresh Vegetables"}/>
                <CategorieCard img={meatfish} text={"Meat & Fish"} Category={"Meat Fish"}/>
                <CategorieCard img={Snack} text={"Snacks"} Category={"Snacks"}/>
                <CategorieCard img={Beverage} text={"Beverages"} Category={"Beverages"}/>
                <CategorieCard img={BeautyHealth} text={"Beauty & Health"} Category={"Beauty Health"}/>
                <CategorieCard img={BreadBakery} text={"Bread & Bakery"} Category={"Bread Bakery"}/>
                <CategorieCard img={BakingNeeds} text={"Baking Needs"} Category={"Baking Needs"}/>
                <CategorieCard img={Cooking} text={"Cooking"} Category={"Cooking"}/>
                <CategorieCard img={DiabeticFood} text={"Diabetic Food"} Category={"Diabetic Food"}/>
                <CategorieCard img={DishDetergent} text={"Dish Detergents"} Category={"Dish Detergents"}/>
                <CategorieCard img={Oil} text={"Oil"} Category={"Oil"}/>
            </div>


            
        </div>


        </>
    )
}