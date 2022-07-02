import CVPathEnum from "../enums/cvPathEnum";
import RenderCVService from "./rederCVService";

interface executeArgs {
  elementId: string;
  cvPath: CVPathEnum;
}

export default class registerLanguageService {
  private renderCVService = new RenderCVService();

  execute({ elementId, cvPath }: executeArgs): void {
    const brazilian = document.getElementById(elementId) as HTMLElement;
    brazilian.onclick = () => this.renderCVService.execute(cvPath);
  }
}
