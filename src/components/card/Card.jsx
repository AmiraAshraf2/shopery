import './Card.css'
import { Link } from 'react-router-dom';
export const Card = ({ item }) => {
  return (<>
    <div className="card hover-green-border" >
      <div className='position-relative'>
        <img src={item.mainImage} className="card-img-top img" alt="" />
        <div className='position-absolute top-0 end-0 mt-4 me-3 hiden-min'>
          <div className='d-flex flex-column gap-2 '>
            <button className="border-0 rounded-circle circle-btn">
              <i class="bi bi-heart"></i>
            </button>
            <button className="border-0 rounded-circle circle-btn ">
              <i class="bi bi-eye"></i>
            </button>

          </div>

        </div>


      </div>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <span className='hover-green-text'>{item.name}</span>
          <span className="fs-5 fw-semibold">${item.price}</span>
          <span className="text-warning">
            {[...Array(5)].map((_, i) => {
              const fullStars = Math.floor(item.rating);
              const hasHalfStar = item.rating % 1 >= 0.5;

              if (i < fullStars) {
                return <i key={i} className="bi bi-star-fill"></i>;
              } else if (i === fullStars && hasHalfStar) {
                return <i key={i} className="bi bi-star-half"></i>;
              } else {
                return <i key={i} className="bi bi-star"></i>;
              }
            })}
          </span>

        </div>

        <Link to={`/products/${item.id}`}>
          <button className="border-0 rounded-circle circle-btn">
            <i class="bi bi-bag"></i>
          </button>

        </Link>


      </div>

    </div>

  </>)
}