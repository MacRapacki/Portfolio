import React from "react";

import { useMyWorkContainer } from "./myWorkContainer";
const MyWork = () => {
  const { projects } = useMyWorkContainer();
  return (
    <section className="myWork" id="04">
      <h2>My Work</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
        voluptatibus quibusdam tempore debitis mollitia molestias ex
        repudiandae, magni dolores id iusto eveniet vitae. Delectus eaque
        molestiae itaque cumque facere odit.
      </p>
      <div className="myWork_projects_wrapper">
        {projects.map(
          ({ name, description, imgURL, demoURL, codeURL, technologies }) => {
            return (
              <div className="myWork_project">
                <h5 className="project_title">{name.toUpperCase()}</h5>
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
    </section>
  );
};

export default MyWork;
