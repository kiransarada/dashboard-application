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
    
    it("should be able to filter by status", () => {
        const userListDebugElement = userDashboardDebugElement.query(By.css("sg-user-list"));
        const userListComponent = userListDebugElement.componentInstance as UserListComponent;
        const tBodyDebugElement = userListDebugElement.query(By.css("table tbody"));

        const allUsersLength = userListComponent.users.length;
        expect(tBodyDebugElement.children.length).toEqual(allUsersLength);
        
        const activeUsersLength = userListComponent.users.filter(user => user.isActive).length;
        userDashboardComponent.viewFilter = "Active";
        componentFixture.detectChanges();
        expect(tBodyDebugElement.children.length).toEqual(activeUsersLength);

        const inactiveUsersLength = userListComponent.users.filter(user => !user.isActive).length;
        userDashboardComponent.viewFilter = "Inactive";
        componentFixture.detectChanges();
        expect(tBodyDebugElement.children.length).toEqual(inactiveUsersLength);
    });
});