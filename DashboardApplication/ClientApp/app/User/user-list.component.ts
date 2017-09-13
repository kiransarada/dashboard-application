import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/modal-options.class";

import { UserService } from "./user.service";
import { IUser } from "./user.interface";
import { UserFormComponent } from "./user-form.component";

@Component({
    selector: "sg-user-list",
    templateUrl: "app/User/user-list.component.html"
})

export class UserListComponent implements OnInit, OnDestroy {
    users: IUser[];
    bsModalRef: BsModalRef;
    userSubsription: Subscription;

    constructor(private readonly dataService: UserService,
                private readonly modalService: BsModalService) { }

    ngOnInit(): void {
        this.userSubsription = this.dataService.$users.subscribe(users => this.users = users);
        this.dataService.loadUsers();
    }

    ngOnDestroy(): void {
        this.userSubsription.unsubscribe();
        this.dataService.onComponentDestroy();
    }

    openEditUserModal(user: IUser) {
        this.bsModalRef = this.modalService.show(UserFormComponent);
        const userFormComponent = this.bsModalRef.content as UserFormComponent;
        userFormComponent.title = "Edit User";
        userFormComponent.user = user;
    }
}