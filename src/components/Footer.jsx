import icon from "../assets/footer/icon.png";
import instagram from "../assets/footer/instagram.png";
import twitter from "../assets/footer/twitter.png";
import facebook from "../assets/footer/facebook.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="brand">
          <img src={icon} />
          <p>Gym Center-Axis</p>
        </div>
        <p>Highlight benefits of each exercise, both physical and mental</p>
      </div>
      <div className="right">
        <div className="list">
          <p>Sitemap</p>
          <li>About Us</li>
          <li>Promos</li>
          <li>News & Blog</li>
          <li>Help Center</li>
        </div>
        <div className="list">
          <p>Support</p>
          <li>FAQ</li>
          <li>Support Center</li>
        </div>
        <div className="list">
          <p>Social Media</p>
          <div className="socials">
            <img src={instagram} />
            <img src={twitter} />
            <img src={facebook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
