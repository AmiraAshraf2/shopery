import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import "./Navber.css"

export const Navbar = () => {
    return (
        <>
            <div className="w-75 m-auto d-flex justify-content-between align-items-center mt-3 text-secondary">
                <span><i class="bi bi-geo-alt"></i> Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                <div>
                    <select className="border-0 pe-1 me-2 text-secondary" aria-label="Default select example">
                        <option selected value="EN">Eng</option>
                        <option value="es">Es</option>
                        <option value="fr">Fr</option>
                        <option value="pt">Pt</option>
                    </select>
                    <select className="border-0 pe-1 text-secondary" aria-label="Default select example">
                        <option selected>USD</option>
                        <option value="1">EUR</option>
                        <option value="2">BRL</option>
                    </select>

                    <Link className='px-3 ms-2 border-start border-secondary text-decoration-none text-secondary' to="Login">Sign In / Sign Up</Link>


                </div>
            </div>
            <hr />
            <div className="w-75 m-auto">
                <nav className="navbar navbar-expand-lg bg-white py-1">
                    <div className="container-fluid">
                        <Link className="navbar-brand d-flex align-items-center gap-2 " to="">
                            <img src={logo} alt="" />
                            <span className='fs-3'>Ecobazar</span>
                        </Link>

                        <div className="input-group border input-w rounded-1">
                            <button className="btn px-3 py-2 rounded-1" type="button" id="button-addon2">
                                <i className="bi bi-search fs-6 fw-2"></i></button>
                            <input type="text" className="form-control bg-transparent border-0"
                                placeholder="Search" aria-label="Search" aria-describedby="Search" />
                            <button className="btn btn-success px-3 py-2 " type="button" id="button-addon2">
                                Search</button>
                        </div>

                        <div className="d-flex align-items-center">

                            <div className="ms-4 pe-3 border-end border-secondary-subtle">
                                <i className="bi bi-heart fs-3 "></i>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <div className="position-relative ms-4 me-2">
                                    <i className="bi bi-bag fs-3"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle-x badge rounded-pill bg-success">
                                        2
                                    </span>
                                </div>

                                <div>
                                    <span>Shopping cart:</span>
                                    <h5>$57.00</h5>
                                </div>

                            </div>
                        </div>

                    </div>
                </nav>

            </div>

            <div className='bg-black'>
                <nav className="navbar navbar-expand-lg w-75 m-auto">
                    <div className="container-fluid ">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary" to="products">Shop</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Home</a></li>
                                        <li><a className="dropdown-item" href="#">Shop</a></li>
                                        <li><a className="dropdown-item" href="#">profile</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary">Contact Us</Link>
                                </li>
                            </ul>
                            <div className='d-flex align-items-center gap-2 text-white'>
                                <i class="bi bi-telephone fs-3"></i>
                                <span className='fs-5 mb-1'>
                                    (219) 555-0114
                                </span>

                            </div>
                        </div>
                    </div>
                </nav>

            </div>

        </>
    )
}