import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { AppComponent } from "../app/app.component";

describe("AppComponent", () => {
    let componentFixture: ComponentFixture<AppComponent>;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.compileComponents();
    }));

    it("should have 'Dashboard' on header text", () => {
        componentFixture = TestBed.createComponent(AppComponent);
        debugElement = componentFixture.debugElement;
        componentFixture.detectChanges();
        const headerElement = debugElement.query(By.css(".page-header h1")).nativeElement;
        expect(headerElement.textContent).toContain("Dashboard");
    });
});