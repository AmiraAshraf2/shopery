import { Link } from "react-router-dom"
import errimg from "../../assets/404logo.svg"
export const PageNotFound = () => {
    return (
        <>
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
            <img src={errimg} alt="" />
            <h2>Oops! page not found</h2>
            <p>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
            <Link className='btn btn-success rounded-pill mt-4 py-2 px-4' to="/">Back to Home</Link>
        </div>


        </>
    )
}