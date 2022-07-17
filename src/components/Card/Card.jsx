import "./Card.css";

function Card({ title, image, anchor, children }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <a href={anchor} target="_blank">
        <img className="card-image" src={image} />
      </a>
      <p className="card-text">{children}</p>
    </div>
  );
}

export default Card;