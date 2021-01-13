import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = "CodeSandbox";
  menuExpanded = false;
  haufenContent = true;

  toggleClick() {
    this.menuExpanded = !this.menuExpanded;
    console.log("toggleClick was triggered", this.menuExpanded);

    if (this.menuExpanded) {
      document.body.classList.add("bodylock");
    } else {
      document.body.classList.remove("bodylock");
    }
  }
}
