import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalRef } from "ngx-bootstrap/modal";

import { IUser } from "./user.interface";
import { UserService } from "./user.service";

export const enum FormType {
    Add,
    Edit
}

@Component({
    selector: "sg-user-form",
    templateUrl: "app/User/user-form.component.html"
})

export class UserFormComponent {
    isSaving = false;
    formType: FormType;
    user = {} as IUser;

    constructor(public bsModalRef: BsModalRef,
                private readonly userService: UserService) { }
    
    onSubmit(form: NgForm) {
        this.isSaving = true;
        this.userService.save(this.user).subscribe(isSuccess => {
            this.isSaving = false;
            if (isSuccess) {
                this.userService.loadUsers();
            }
            form.reset(this.user);
        });
    }

    get title(): string {
        switch (this.formType) {
            case FormType.Add:
                return "Add New User";
            case FormType.Edit:
                return "Edit User";
            default:
                return undefined;
        }
    }

    get saveText(): string {
        return (this.isSaving) ? "Saving..." : "Save";
    }
}