import ElementIdEnum from "../enums/elementIdEnum";
import CVPathEnum from "../enums/cvPathEnum";
import RegisterLanguageService from "./registerLanguageService";
import RenderCVService from "./rederCVService";

export default class SetUpService {
  private readonly registerLanguageService = new RegisterLanguageService();
  private readonly renderCVService = new RenderCVService();

  public execute(): void {
    this.renderDefaultCV();
    this.registerLanguages();
  }

  private renderDefaultCV(): void {
    this.renderCVService.execute(CVPathEnum.brazilian);
  }

  private registerLanguages(): void {
    this.registerLanguageService.execute({
      elementId: ElementIdEnum.brazilianFlag,
      cvPath: CVPathEnum.brazilian,
    });
    this.registerLanguageService.execute({
      elementId: ElementIdEnum.englishFlag,
      cvPath: CVPathEnum.english,
    });
  }
}
