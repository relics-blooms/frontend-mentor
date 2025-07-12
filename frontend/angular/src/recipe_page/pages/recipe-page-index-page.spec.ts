import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RecipePageIndexPage } from "./recipe-page-index-page";

describe("RecipePageIndexPage", () => {
  let component: RecipePageIndexPage;
  let fixture: ComponentFixture<RecipePageIndexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipePageIndexPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipePageIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
