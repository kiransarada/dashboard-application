﻿import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { UserService } from "./user.service";
import { IUser } from "./user.interface";
import { UserFormComponent, FormType } from "./user-form.component";
import { StaticModalConfig } from "../Shared/modal.config";

@Component({
    selector: "sg-user-list",
    templateUrl: "./user-list.component.html"
})

export class UserListComponent implements OnInit, OnChanges, OnDestroy {
    @Input() viewFilter: string;

    users: IUser[];
    statusFilter: boolean;
    bsModalRef: BsModalRef;
    userSubsription: Subscription;
    
    constructor(private readonly userService: UserService,
                private readonly modalService: BsModalService) { }

    ngOnInit(): void {
        this.userSubsription = this.userService.$users.subscribe(users => this.users = users);
        this.userService.loadUsers();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty("viewFilter")) {
            switch (this.viewFilter) {
                case "Active":
                    this.statusFilter = true;
                    break;
                case "Inactive":
                    this.statusFilter = false;
                    break;
                default:
                    this.statusFilter = undefined;
            }
        }
    }

    ngOnDestroy(): void {
        this.userSubsription.unsubscribe();
        this.userService.onComponentDestroy();
    }

    getStatusText(user: IUser): string {
        return user.isActive ? "Active" : "Inactive";
    }

    openEditUserModal(user: IUser) {
        this.bsModalRef = this.modalService.show(UserFormComponent, StaticModalConfig);
        const userFormComponent = this.bsModalRef.content as UserFormComponent;
        userFormComponent.formType = FormType.Edit;
        userFormComponent.user = Object.assign({}, user);
    }

    deleteUser(deletedUser: IUser) {
        this.userService.delete(deletedUser).subscribe(isSuccess => {
            if (isSuccess) {
                this.users = this.users.filter(user => user.id !== deletedUser.id);
            }
        });
    }
}