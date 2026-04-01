import { Link } from "react-router-dom"

export const CategorieCard = ({ img,text,Category}) => {
    return (
        <>
            <Link className="text-decoration-none" to={Category}>
            <div className="card" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text text-center fw-bolder">{text}</p>
                </div>
            </div>
            </Link>
        </>
    )
}