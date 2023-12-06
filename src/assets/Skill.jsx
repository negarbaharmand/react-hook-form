import { useState } from "react";
import { Form } from "./Form";

export const Skill = () => {
  const [skills, setSkills] = useState([]);
  const addSkill = (title) => {
    const newSkill = {
      id: Math.random(),
      title: title,
    };
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };
  const removeSkill = (id) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  };
  const ShowData = ({ skills }) => {
    return (
      <ul>
        {skills.map((skill) => (
          <li key={skill.id} onClick={() => removeSkill(skill.id)}>
            {skill.title}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Fullstack Developer Skills</h2>
      <ShowData skills={skills} />
      <Form addSkill={addSkill} />
    </div>
  );
};
