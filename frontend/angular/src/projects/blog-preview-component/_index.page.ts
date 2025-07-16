import { Component } from "@angular/core";

@Component({
  imports: [],
  selector: "projects-blog-preview-component-_index-page",
  template: `
    <h1>Blog Preview</h1>
    <ul>
      <li>{{ data[0] }}</li>
    </ul>
  `,
})
export default class _IndexPage {
  protected readonly data = ["a", "b", "c", "d"];
}
