import ElementIdEnum from "../enums/elementIdEnum";
import CVPathEnum from "../enums/cvPathEnum";
import $ from "jquery";

export default class RenderCVService {
  private readonly cvElement = document.getElementById(
    ElementIdEnum.cv
  ) as HTMLImageElement;

  public execute(cvPath: CVPathEnum): void {
    this.hideCV();
    this.loadCVImage(cvPath);
    this.showLoaderUntilCVLoaded();
  }

  private hideCV(): void {
    this.cvElement.src = "";
  }

  private loadCVImage(cvPath: CVPathEnum): void {
    this.cvElement.src = cvPath;
  }

  private showLoaderUntilCVLoaded(): void {
    const loader = document.getElementById(ElementIdEnum.loader) as HTMLElement;

    loader.style.visibility = "visible";

    $(`#${ElementIdEnum.cv}`).on("load", function () {
      loader.style.visibility = "hidden";
    });
  }
}
