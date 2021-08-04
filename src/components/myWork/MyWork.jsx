import React from "react";

import { useMyWorkContainer } from "./myWorkContainer";
const MyWork = () => {
  const { projects } = useMyWorkContainer();
  return (
    <section className="myWork bg" id="04">
      <h2>My Work</h2>
      <p className="subtitle">
        In this section You can check my projects and technologies i work with.
      </p>
      <div className="myWork_projects_wrapper">
        {projects.map(
          ({
            name,
            description,
            imgURL,
            demoURL,
            codeURL,
            technologies,
            status,
          }) => {
            return (
              <div className="myWork_project">
                <h5 className="project_title">
                  {name.toUpperCase()}{" "}
                  <span className="project_title_status">({status})</span>
                </h5>
                <div className="project_img">
                  {" "}
                  <img src={imgURL} alt="project screenshot" />{" "}
                  <div className="project_links">
                    <a
                      href={demoURL}
                      className="project_link live"
                      target="blank"
                    >
                      <i class="fas fa-eye"></i>
                    </a>
                    <a
                      href={codeURL}
                      className="project_link code"
                      target="blank"
                    >
                      <i class="fas fa-code"></i>
                    </a>
                  </div>
                </div>
                <div className="porject_content">
                  <p className="project_description">{description}</p>
                  <p className="project_technologies">
                    {technologies.map((item) => (
                      <span>#{item}, </span>
                    ))}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
      <a
        className="myWork_ghLink"
        href="https://github.com/MacRapacki"
        target="blank"
      >
        Check out more of my projects on GitHub.
      </a>
    </section>
  );
};

export default MyWork;
