import "./PersonalInfo.css";

function PersonalInfo({ data, handleInputUpdate }) {
  return (
    <>
      <label>
        Name
        <input
          className="personal-input"
          type="text"
          placeholder="e.g. John Doe"
          required
          value={data.name || ""}
          onChange={(e) => handleInputUpdate("name", e.target.value)}
        />
      </label>

      <label>
        Email
        <input
          className="personal-input"
          type="email"
          placeholder="e.g. john@email.com"
          required
          value={data.email || ""}
          onChange={(e) => handleInputUpdate("email", e.target.value)}
        />
      </label>

      <label>
        Phone number
        <input
          className="personal-input"
          type="tel"
          placeholder="e.g. 123456789"
          required
          value={data.phone || ""}
          onChange={(e) => handleInputUpdate("phone", e.target.value)}
        />
      </label>
    </>
  );
}

export default PersonalInfo;
