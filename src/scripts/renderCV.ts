import CVPathEnum from "./cvPathEnum";

const renderCV = (cvPath: CVPathEnum): void => {
  const img = document.getElementById("cv") as HTMLImageElement;
  img.src = cvPath;
};

export default renderCV;
