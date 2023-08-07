const Card = ({ icon, title, text }) => {
  return (
    <div className="card">
      <img className="icon" src={icon} />
      <div className="title">{title}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Card;
