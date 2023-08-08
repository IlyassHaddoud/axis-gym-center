import stars from "../assets/review/stars.png";

const Review = ({ comment, image, name, fonction }) => {
  return (
    <div className="review">
      <div className="rating">
        <img src={stars} />
      </div>
      <div className="comment">{comment}</div>
      <div className="user">
        <img src={image} />
        <div className="info">
          <p>{name}</p>
          <p>{fonction}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
