import { useParams } from "react-router-dom"
import products from "../../assets/data.js"
import { Card } from '../card/Card.jsx';
import "./SingleProduct.css"
import brand from '../../assets/brand.svg'
import { useState } from "react"
export const SingleProduct = () => {
    const { productId } = useParams();
    console.log(productId);

    const product = products.find(p => p.id === Number(productId));
    console.log(product);
    const [quantity, setquantity] = useState(1);
    const [mainImg, setMainImg] = useState(product.mainImage);
    return (
        <>
            <div className="w-75 m-auto mt-4">
                <div className="d-flex gap-2 mb-5 ">
                    <div className="d-flex gap-3 w-50">
                        <div className="d-flex flex-column side-imgs justify-content-between">
                            <img src={product.mainImage} onClick={() => setMainImg(product.mainImage)} alt="" />
                            {
                                product.images.map((imge, i) => {
                                    return (
                                        <img key={i} src={imge} onClick={() => setMainImg(imge)}/>
                                    )
                                })
                            }
                        </div>
                        <img className="mainimg" src={mainImg} alt="" />

                    </div>
                    <div className="ms-4 w-50">
                        <h2>{product.name} <span className="fs-6 text-success bg-success-subtle p-1 px-2 rounded-2">In Stock</span></h2>
                        <span className="text-warning">
                            {[...Array(5)].map((_, i) => {
                                const fullStars = Math.floor(product.rating);
                                const hasHalfStar = product.rating % 1 >= 0.5;

                                if (i < fullStars) {
                                    return <i key={i} className="bi bi-star-fill"></i>;
                                } else if (i === fullStars && hasHalfStar) {
                                    return <i key={i} className="bi bi-star-half"></i>;
                                } else {
                                    return <i key={i} className="bi bi-star"></i>;
                                }
                            })}
                            <span className="text-secondary ms-2">{ product.rating } Review</span>
                        </span>
                        <div className="mt-2">
                            {
                                product.discount>0 ? <p > <span className="text-decoration-line-through text-secondary fs-4 fw-semibold">${product.price}</span> <span className="text-success fs-4 fw-semibold">${product.price-(product.price *(product.discount/100))}</span> <span className="text-danger bg-danger-subtle rounded-pill px-3 py-2 fw-semibold">{product.discount}% Off</span> </p>: <p className="text-success fs-4 fw-semibold">${product.price}</p>
                            }
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mb-3">
                            <div className="d-flex align-items-center gap-2">
                                <span className="fw-medium">Brand:</span>
                                <img src={brand} alt="" />
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <span className="fw-medium">Share item:</span>
                                <div>
                                    <i class="fa-brands fa-facebook-f fs-4 me-4"></i>
                                    <i class="fa-brands fa-twitter fs-4 me-4"></i>
                                    <i class="fa-brands fa-pinterest-p fs-4 me-4"></i>
                                    <i class="fa-brands fa-instagram fs-4"></i>
                                </div>
                            </div>

                        </div>
                        <h6 className="text-secondary">{product.description}</h6>
                        <hr />
                        <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center border rounded-pill px-2 py-1 gap-2">
                                <button className="border-0 rounded-circle fs-4 text-center btn-size d-flex align-items-center justify-content-center" onClick={()=>quantity>1?setquantity(quantity-1):setquantity(quantity)}>-</button>
                                <span className="fs-4 px-2">{quantity}</span>
                                <button className="border-0 rounded-circle fs-4 text-center btn-size d-flex align-items-center justify-content-center" onClick={()=>setquantity(quantity+1)}>+</button>
                            </div>
                            <button className="btn btn-success border-0 rounded-pill btn-w py-1 fs-4">Add to Cart <i class="bi bi-bag ms-2"></i></button>
                            <button className="rounded-circle bg-success-subtle text-success border-0 fs-4 p-2 px-3"><i class="bi bi-heart"></i></button>
                        </div>
                        <hr />
                        <p className="fw-semibold">Category: <span className="text-secondary">{product.category}</span></p>
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 text-center">Related Products</h3>

                    <div className="prodctgrid">
                    {
                        products.filter(productdata => productdata.category === product.category).slice(0, 4).map((item) => {
                                                    return (
                        
                                                        <Card key={item.id} item={item} />
                        
                        
                        
                                                    )
                                                })
                        
                    }

                    </div>


                </div>
            </div>


        </>
    )
}