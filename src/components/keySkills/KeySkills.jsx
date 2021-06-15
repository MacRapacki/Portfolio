import React from "react";

import { useKeySkillsContainer } from "./keySkillsContainer";

const KeySkills = () => {
  const { skills } = useKeySkillsContainer();

  return (
    <section className="key_skills" id="03">
      <div className="key_skills_text">
        <h2>Key Skills</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          veritatis vel pariatur repellendus ex alias in! Optio facilis autem
          inventore nihil debitis, excepturi rem, ratione obcaecati cumque
          impedit praesentium ipsam?
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
