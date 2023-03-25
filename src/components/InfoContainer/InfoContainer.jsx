import "./InfoContainer.css";

function InfoContainer({ title, subtitle, content }) {
  return (
    <div className="info-container">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {content}
      <div className="actions">
        <button disabled className="btn btn-prev">
          Go back
        </button>
        <button className="btn btn-next">Next Step</button>
      </div>
    </div>
  );
}

export default InfoContainer;
