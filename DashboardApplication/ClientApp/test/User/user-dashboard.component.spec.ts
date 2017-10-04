import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ModalModule } from "ngx-bootstrap/modal";

import { UserDashboardComponent } from "../../app/User/user-dashboard.component";

describe("UserDashboardComponent (Shallow)", () => {
    let componentFixture: ComponentFixture<UserDashboardComponent>;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ModalModule.forRoot()],
            declarations: [UserDashboardComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.compileComponents();
    }));

    it("should have 'Users' on panel header text", () => {
        componentFixture = TestBed.createComponent(UserDashboardComponent);
        debugElement = componentFixture.debugElement;
        componentFixture.detectChanges();
        const panelHeaderElement = debugElement.query(By.css(".panel-heading")).nativeElement;
        expect(panelHeaderElement.textContent).toContain("Users");
    });
});