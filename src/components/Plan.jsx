import checkList from "../assets/plan/check-list.png";
import image from "../assets/plan/image.png";

const Plan = () => {
  return (
    <div className="plan">
      <div className="frames">
        <img src={image} />
      </div>
      <div className="content">
        <h1>Transform your physique with our fitness plan</h1>
        <div className="list">
          <div className="li">
            <img src={checkList} />
            <p>Increase Muscle and Strength</p>
          </div>
          <div className="li">
            <img src={checkList} />
            <p>Be Healthier than before</p>
          </div>
          <div className="li">
            <img src={checkList} />
            <p>Increase Stamina</p>
          </div>
        </div>
        <div className="btns">
          <button className="join">Join Now</button>
          <button className="contact">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
