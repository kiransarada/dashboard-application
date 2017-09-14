import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalRef } from "ngx-bootstrap/modal";

import { IUser } from "./user.interface";
import { UserService } from "./user.service";

@Component({
    selector: "sg-user-form",
    templateUrl: "app/User/user-form.component.html"
})

export class UserFormComponent {
    title: string;
    isSaving = false;
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

    get saveText(): string {
        if (this.isSaving) {
            return "Saving...";
        }

        return "Save";
    }
}