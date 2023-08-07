import start from "../assets/hero/Search.png";
import fitness from "../assets/hero/fitness.png";
import frontImage from "../assets/hero/front-image.png";
import follower from "../assets/hero/followers.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Helps for your ideal body fitness</h1>
        <p>
          Motivate users with benefits and positive reinforcement, and offer
          modifications and progress tracking.
        </p>
        <div className="btns">
          <button>Start Training</button>
          <div className="btn">
            <img src={start} />
            <a href="">Watch Demo</a>
          </div>
        </div>
      </div>
      <div className="frame">
        <img className="fitness" src={fitness} alt="" />
        <img className="front-image" src={frontImage} alt="" />
        <img className="followers" src={follower} alt="" />
      </div>
    </div>
  );
};

export default Hero;
