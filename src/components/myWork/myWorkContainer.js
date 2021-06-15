import SaroImg from "../../images/myWork/saro.png";
import LandingPageImg from "../../images/myWork/landingPage.png";
import PetClinic from "../../images/myWork/petClinic.png";
import PremierLeagueStats from "../../images/myWork/premierLeagueStats.png";
import WeightLossPlanner from "../../images/myWork/weightLossPlanner.png";

export const useMyWorkContainer = () => {
  const projects = [
    {
      name: "saro",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      imgURL: SaroImg,
      demoURL: "https://dev--i-saro.netlify.app/",
      codeURL: "https://github.com/michalskirobert/saro-react",
      technologies: [
        "react",
        "redux",
        "typescript",
        "firebase",
        "formik",
        "styled components",
        "reactstrap",
      ],
    },
    {
      name: "Landing Page",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      imgURL: LandingPageImg,
      demoURL: "https://macrapacki.github.io/Landing-Page/",
      codeURL: "https://github.com/MacRapacki/Landing-Page",
      technologies: ["html", "sass", "javascript"],
    },
    {
      name: "Pet Clinic",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      imgURL: PetClinic,
      demoURL: "https://macrapacki-petclinic.netlify.app/",
      codeURL: "https://github.com/MacRapacki/pet-clinic-gatsby",
      technologies: [
        "gatsby",
        "css - scss modules",
        "graphql",
        "datocms",
        "netlify",
      ],
    },
    {
      name: "Premier Leagues Stats",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      imgURL: PremierLeagueStats,
      demoURL: "https://macrapacki.github.io/Premier-League-stats/",
      codeURL: "https://github.com/MacRapacki/Premier-League-stats",
      technologies: ["react", "api", "sass"],
    },
    {
      name: "Weight Loss Planer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      imgURL: WeightLossPlanner,
      demoURL: "https://macrapacki.github.io/Weight-Loss-Planner/",
      codeURL: "https://github.com/MacRapacki/Weight-Loss-Planner",
      technologies: ["html", "css", "javascript"],
    },
  ];
  return { projects };
};
