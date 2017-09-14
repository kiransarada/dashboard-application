import { Component } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";

import { IUser } from "./user.interface";

@Component({
    selector: "sg-user-form",
    templateUrl: "app/User/user-form.component.html"
})

export class UserFormComponent {
    title: string;
    isSaving = false;
    user = {} as IUser;

    constructor(public bsModalRef: BsModalRef) { }
    
    onSubmit() {
        this.isSaving = true;
        setTimeout(() => {
            console.log(this.user);
            this.isSaving = false;
        }, 2000);
    }

    get saveText(): string {
        if (this.isSaving) {
            return "Saving...";
        }

        return "Save";
    }
}