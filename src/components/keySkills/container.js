import HtmlImg from "../../images/skills/icons8-html-5-100.png";
import Css3Img from "../../images/skills/icons8-css3-100.png";
import FigmaImg from "../../images/skills/icons8-figma-100.png";
import GitImg from "../../images/skills/icons8-git-100.png";
import JavascriptImg from "../../images/skills/icons8-javascript-100.png";
import ReactImg from "../../images/skills/icons8-react-native-100.png";
import ReduxImg from "../../images/skills/icons8-redux-100.png";
import SassImg from "../../images/skills/icons8-sass-100.png";

export const useContainer = () => {
  const skills = [
    {
      img: HtmlImg,
      name: "HTML 5",
    },
    {
      img: Css3Img,
      name: "CSS 3",
    },
    {
      img: JavascriptImg,
      name: "Javascript",
    },
    {
      img: SassImg,
      name: "Sass",
    },
    {
      img: ReactImg,
      name: "React",
    },
    {
      img: GitImg,
      name: "Git/Github",
    },
    {
      img: FigmaImg,
      name: "Figma",
    },
    {
      img: ReduxImg,
      name: "Redux",
    },
  ];

  return {
    skills,
  };
};
