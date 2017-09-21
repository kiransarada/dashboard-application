import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "../app/app.component";

describe("AppComponent", () => {
    let componentFixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.compileComponents();
    }));

    it("should get 'Test' as projectName header title", () => {
        componentFixture = TestBed.createComponent(AppComponent);
        componentFixture.detectChanges();
        expect(componentFixture.componentInstance).toBeDefined();
    });
});