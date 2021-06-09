import SaroImg from "../../images/myWork/saro.png";

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
  ];
  return { projects };
};
