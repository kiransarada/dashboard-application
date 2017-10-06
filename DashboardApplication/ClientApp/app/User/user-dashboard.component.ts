import { Component } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { UserFormComponent, FormType } from "./user-form.component";
import { StaticModalConfig } from "../Shared/modal.config";

@Component({
    selector: "sg-user-dashboard",
    templateUrl: "./user-dashboard.component.html"
})

export class UserDashboardComponent {
    bsModalRef: BsModalRef;
    viewFilter = "All";
    
    constructor(private readonly modalService: BsModalService) { }

    openAddUserModal() {
        this.bsModalRef = this.modalService.show(UserFormComponent, StaticModalConfig);
        const userFormComponent = this.bsModalRef.content as UserFormComponent;
        userFormComponent.formType = FormType.Add;
    }
}