import { Link } from 'react-router-dom';
import './Products.css'
import { useState, useEffect } from "react"
import { Card } from '../card/Card';
import data from '../../assets/data.js'
import axios from "axios"
export const Products = ({ Category }) => {
    const [daycount, setdaycount] = useState(0);
    const [hourcount, sethourcount] = useState(2);
    const [minutecount, setminutecount] = useState(18);
    const [secondcount, setsecondcount] = useState(46);

    const [product, setProducts] = useState([])
    async function getProducts() {
        const res = await axios.get("https://dummyjson.com/products")

        setProducts(res.data.products)
    }

    useEffect(() => {
        getProducts();
    }, []);

    const formatTime = (num) => String(num).padStart(2, "0");


    useEffect(() => {
        const interval = setInterval(() => {
            setsecondcount((prevSecond) => {
                if (
                    daycount === 0 &&
                    hourcount === 0 &&
                    minutecount === 0 &&
                    prevSecond === 0
                ) {
                    clearInterval(interval);
                    return 0;
                }

                if (prevSecond > 0) {
                    return prevSecond - 1;
                } else {
                    // handle borrow
                    setminutecount((prevMinute) => {
                        if (prevMinute > 0) {
                            return prevMinute - 1;
                        } else {
                            sethourcount((prevHour) => {
                                if (prevHour > 0) {
                                    return prevHour - 1;
                                } else {
                                    setdaycount((prevDay) => {
                                        if (prevDay > 0) {
                                            return prevDay - 1;
                                        }
                                        return 0;
                                    });
                                    return 23;
                                }
                            });
                            return 59;
                        }
                    });

                    return 59;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [daycount, hourcount, minutecount]);

    return (
        <>
            <div className="w-75 m-auto mt-4">
                <nav
                    style={{ "--bs-breadcrumb-divider": "'>'" }}
                    aria-label="breadcrumb"
                    className='mb-4'
                >
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link className='text-decoration-none text-secondary' to="/"><i className="bi bi-house-door"></i></Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link className='text-decoration-none text-secondary' to="">Categories</Link>
                        </li>
                        <li className="breadcrumb-item text-success active" aria-current="page">
                            {Category}
                        </li>
                    </ol>
                </nav>

                <div className='bg-img p-5 text-white d-flex gap-5 rounded-2 mb-5'>
                    <div>
                        <span>Best Deals</span>
                        <h3 className='mt-2'>Sale of the Month</h3>

                        <div>
                            <div className='fs-3 d-flex gap-2'>
                                <span className='text-success'>{formatTime(daycount)}</span>
                                <span className='text-secondary'>:</span>
                                <span className='text-success'>{formatTime(hourcount)}</span>
                                <span className='text-secondary'>:</span>
                                <span className='text-success'>{formatTime(minutecount)}</span>
                                <span className='text-secondary'>:</span>
                                <span className='text-success'>{formatTime(secondcount)}</span>
                            </div>

                            <div className='text-secondary d-flex gap-3'>
                                <span>Days</span>
                                <span>Hours</span>
                                <span>Mins</span>
                                <span>Secs</span>
                            </div>

                        </div>

                        <button className='btn btn-success rounded-pill mt-4 py-2 px-4 mb-5'>Shop Now <i class="bi bi-arrow-right ms-3"></i></button>
                    </div>

                    <div className='d-flex bg-warning rounded-circle align-items-center justify-content-center circle-size flex-column'>
                        <span className='fs-5 fw-bolder'>56%</span>
                        <span>Off</span>
                    </div>

                </div>

                <div className="prodctgrid mb-5">
                    {
                        data
                            .filter((item) => {
                                return Category === "" || item.category === Category;
                            })
                            .map((item) => {
                                return <Card key={item.id} item={item} />;
                            })
                    }

                </div>
            </div>

        </>
    )
}