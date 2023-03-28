import "./InfoContainer.css";

function InfoContainer({ data, title, subtitle, content }) {
  return (
    <div className="info-container">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {content}
    </div>
  );
}

export default InfoContainer;
