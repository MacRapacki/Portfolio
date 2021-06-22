import SaroImg from "../../images/myWork/saro.png";
import LandingPageImg from "../../images/myWork/landingPage.png";
import PetClinic from "../../images/myWork/petClinic.png";
import PremierLeagueStats from "../../images/myWork/PremierLeagueStats.png";
import WeightLossPlanner from "../../images/myWork/weightLossPlanner.png";

export const useMyWorkContainer = () => {
  const projects = [
    {
      name: "saro",
      description:
        "This is a open source project i work with. My main contributions are implementing new components and layout. This project show me how to work with team, many libraries (redux, react-tostify, formik and more..) and show me how to use constants, object destructuring and atomic design principles.",
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
      description: "This project is simple landing page.",
      imgURL: LandingPageImg,
      demoURL: "https://macrapacki.github.io/Landing-Page/",
      codeURL: "https://github.com/MacRapacki/Landing-Page",
      technologies: ["html", "sass", "javascript"],
    },
    {
      name: "Pet Clinic",
      description:
        "This project is a website for pet clinic in Poland. The project was made in gatsby, it hosting by Netlify and it works with DatoCms.",
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
        "This website is for Premier League fans. You can check there basics statistics. Website has been made to work with API.",
      imgURL: PremierLeagueStats,
      demoURL: "https://macrapacki.github.io/Premier-League-stats/",
      codeURL: "https://github.com/MacRapacki/Premier-League-stats",
      technologies: ["react", "api", "sass"],
    },
    {
      name: "Weight Loss Planer",
      description:
        "This project is simple app to check Your BMI and You will get know how many kilograms per day You need to loose to get Your desire weight.",
      imgURL: WeightLossPlanner,
      demoURL: "https://macrapacki.github.io/Weight-Loss-Planner/",
      codeURL: "https://github.com/MacRapacki/Weight-Loss-Planner",
      technologies: ["html", "css", "javascript"],
    },
  ];
  return { projects };
};