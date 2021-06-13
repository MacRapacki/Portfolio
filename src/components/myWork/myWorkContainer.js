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
      demoURL: "",
      codeURL: "",
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
      demoURL: "",
      codeURL: "",
      technologies: ["html", "sass", "javascript"],
    },
    {
      name: "Pet Clinic",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      imgURL: PetClinic,
      demoURL: "",
      codeURL: "",
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
      demoURL: "",
      codeURL: "",
      technologies: ["react", "api", "sass"],
    },
    {
      name: "Weight Loss Planer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      imgURL: WeightLossPlanner,
      demoURL: "",
      codeURL: "",
      technologies: ["html", "css", "javascript"],
    },
  ];
  return { projects };
};
