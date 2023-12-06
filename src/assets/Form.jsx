import { useState } from "react";

export const Form = ({ addSkill }) => {
  const [skill, setSkill] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setSkill(e.target.value);
    setError("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (skill.trim() === "") {
        setError("This field is required.");
        return;
      }

      addSkill(skill);
      setSkill("");
      setError("");
    }
  };
  const buttonClickHandler = () => {
    if (skill.trim() === "") {
      setError("This field is required.");
      return;
    }

    addSkill(skill);
    setSkill("");
    setError("");
  };
  return (
    <form className="form-inline">
      <div className="row align-items-center">
        <div className="col-auto">
          <input
            type="text"
            className={`form-control ${error ? "is-invalid" : ""}`}
            id="skill"
            placeholder="Skill title"
            value={skill}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>

        <div className="col-auto">
          <button
            type="button"
            className="btn btn-success ml-2"
            onClick={buttonClickHandler}
          >
            +
          </button>
        </div>
      </div>
    </form>
  );
};
