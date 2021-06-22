import React from "react";

import { useKeySkillsContainer } from "./keySkillsContainer";

const KeySkills = () => {
  const { skills } = useKeySkillsContainer();

  return (
    <section className="key_skills" id="03">
      <div className="key_skills_text">
        <h2>Key Skills</h2>
        <p className="subtitle">
          Have a look on the technologies i have been work with.
        </p>
      </div>
      <div className="key_skills_cards">
        {skills.map(({ name, img }) => (
          <div className="key_skills_card">
            <img src={img} alt="a" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeySkills;
