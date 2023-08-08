import copyright from "../assets/copyright/copyright.png";

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="left">
        <img src={copyright} />
        <p>2023 Ilyass Haddoud</p>
      </div>
      <div className="right">
        <p>Terms Of Use</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Copyright;
