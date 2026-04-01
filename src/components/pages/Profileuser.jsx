import p from "../../assets/person.jpg"
import "./Profileuser.css"

export const Profile = () => {

    return (
        <>
            <div className="container-fluid bg-light min-vh-100 py-4">
                <div className="row justify-content-center">

                 
                    <div className="col-md-3 col-lg-2">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body p-0">
                                <h5 className="p-3 mb-0">Navigation</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 nav-item">Dashboard</li>
                                    <li className="list-group-item border-0 nav-item">Order History</li>
                                    <li className="list-group-item border-0 nav-item">Wishlist</li>
                                    <li className="list-group-item border-0 nav-item">Shopping Cart</li>
                                    <li className="list-group-item border-0 nav-item active-nav">Settings</li>
                                    <li className="list-group-item border-0 nav-item">Log-out</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-9 col-lg-8">

                        
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-header bg-white py-3">
                                <h5 className="mb-0">Account Settings</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="mb-3">
                                            <label className="form-label">First name</label>
                                            <input type="text" className="form-control" defaultValue="Dianne" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" defaultValue="Russell" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" defaultValue="dianne.russell@gmail.com" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Phone Number</label>
                                            <input type="text" className="form-control" defaultValue="(603) 555-0123" />
                                        </div>
                                        <button className="btn btn-success rounded-pill px-4">Save Changes</button>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="profile-img-container mb-3">
                                            <img src={p} alt="Profile" className="rounded-circle img-fluid border" />
                                        </div>
                                        <button className="btn btn-outline-success rounded-pill btn-sm">Choose Image</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-header bg-white py-3">
                                <h5 className="mb-0">Billing Address</h5>
                            </div>
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <label className="form-label">First name</label>
                                        <input type="text" className="form-control" defaultValue="Dianne" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Last name</label>
                                        <input type="text" className="form-control" defaultValue="Dianne" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Company Name (optional)</label>
                                        <input type="text" className="form-control" defaultValue="Zakirsoft" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Street Address</label>
                                        <input type="text" className="form-control border-success" defaultValue="4140 Parl" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Country / Region</label>
                                        <select className="form-select">
                                            <option>United States</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">States</label>
                                        <select className="form-select">
                                            <option>Washington DC</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Zip Code</label>
                                        <input type="text" className="form-control" defaultValue="20033" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" defaultValue="dianne.russell@gmail.com" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" defaultValue="(603) 555-0123" />
                                    </div>
                                </div>
                                <button className="btn btn-success rounded-pill px-4 mt-4">Save Changes</button>
                            </div>
                        </div>

                        
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-white py-3">
                                <h5 className="mb-0">Change Password</h5>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">Current Password</label>
                                    <input type="password" title="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="row g-3 mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label">New Password</label>
                                        <input type="password" title="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" title="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <button className="btn btn-success rounded-pill px-4">Change Password</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}