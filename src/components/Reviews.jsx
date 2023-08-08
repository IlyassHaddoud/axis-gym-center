import Review from "./Review";
import followers from "../assets/review/followers.png";
import user1 from "../assets/review/user1.png";
import testimonial from "../assets/review/testimonial.png";
const Reviews = () => {
  return (
    <div className="reviews">
      <img className="testimonial" src={testimonial} />
      <div className="left">
        <h1>What Our Memeber Say About Us?</h1>
        <img src={followers} />
      </div>
      <div className="right">
        <Review
          comment="“ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”"
          image={user1}
          name="Jonathan Edward"
          fonction="Office Worker"
        />
      </div>
    </div>
  );
};

export default Reviews;
