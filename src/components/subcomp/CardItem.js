import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`container ${className}`}>
      <div>
        <h1 className="heading" style={{fontWeight:'900'}}>{title}</h1>
        <p className="para">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="img" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem