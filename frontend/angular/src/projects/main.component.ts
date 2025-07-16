import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  imports: [RouterOutlet],
  selector: "app-main",
  template: `<router-outlet />`,
})
export default class Main {}
