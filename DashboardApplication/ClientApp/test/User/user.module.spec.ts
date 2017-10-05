import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ModalModule } from "ngx-bootstrap/modal";

import { UserModule } from "../../app/User/user.module";
import { UserDashboardComponent } from "../../app/User/user-dashboard.component";
import { UserListComponent } from "../../app/User/user-list.component";
import { UserService } from "../../app/User/user.service";
import { MockUserService } from "./mock-user.service";

describe("UserModule (Integration)", () => {
    let componentFixture: ComponentFixture<UserDashboardComponent>;
    let userDashboardComponent: UserDashboardComponent;
    let userDashboardDebugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [UserModule, ModalModule.forRoot()]
        });

        TestBed.overrideProvider(UserService, {
            useValue: new MockUserService()
        });

        TestBed.compileComponents();
    }));

    beforeEach(() => {
        componentFixture = TestBed.createComponent(UserDashboardComponent);
        userDashboardComponent = componentFixture.componentInstance;
        userDashboardDebugElement = componentFixture.debugElement;
        componentFixture.detectChanges();
    });

    it("should have 1 user listed on the first load", () => {
        const userListDebugElement = userDashboardDebugElement.query(By.css("sg-user-list"));
        const userListComponent = userListDebugElement.componentInstance as UserListComponent;
        expect(userListComponent.users.length).toEqual(1);
    });
});