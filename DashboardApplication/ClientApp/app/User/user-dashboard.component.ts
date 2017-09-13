import { Component } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/modal-options.class";

import { UserFormComponent } from "./user-form.component";

@Component({
    selector: "sg-user-dashboard",
    templateUrl: "app/User/user-dashboard.component.html"
})

export class UserDashboardComponent {
    bsModalRef: BsModalRef;

    constructor(private readonly modalService: BsModalService) { }

    openAddUserModal() {
        this.bsModalRef = this.modalService.show(UserFormComponent);
        const userFormComponent = this.bsModalRef.content as UserFormComponent;
        userFormComponent.title = "Add New User";
    }
}