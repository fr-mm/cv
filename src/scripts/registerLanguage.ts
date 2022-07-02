import CVPathEnum from "./cvPathEnum";
import renderCV from "./renderCV";

interface registerLanguageArgs {
  elementId: string;
  cvPath: CVPathEnum;
}

export default function registerLanguage({
  elementId,
  cvPath,
}: registerLanguageArgs) {
  const brazilian = document.getElementById(elementId) as HTMLElement;
  brazilian.onclick = () => renderCV(cvPath);
}
