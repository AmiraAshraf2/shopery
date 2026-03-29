

export const Card = ({ item }) => {
  return (<>
    <div className="card" >
      {/* <img src={img} className="card-img-top" alt="" /> */}
      <img src={item.thumbnail} className="card-img-top" alt="" />
      <div className="card-body">
        <div className="d-flex flex-column">
          <span>{item.title}</span>
          <span className="fs-5 fw-semibold">${item.price}</span>
          {"★".repeat(Math.round(item.rating || 4))}
          {"☆".repeat(5 - Math.round(item.rating || 1))}

        </div>
      </div>

    </div>

  </>)
}