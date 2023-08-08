import image from "../assets/prices/check-list.png";

const Package = ({ name, price, tag, features }) => {
  return (
    <div className="package">
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
        <div className="tag">{tag}</div>
        <div className="features">
          {features.map((feature) => (
            <div className="feature">
              <img src={image} />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
      <button>Register Now</button>
    </div>
  );
};

export default Package;
