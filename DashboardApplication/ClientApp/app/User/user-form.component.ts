import { Component } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal/modal-options.class";

import { IUser } from "./user.interface";

@Component({
    selector: "sg-user-form",
    templateUrl: "app/User/user-form.component.html"
})

export class UserFormComponent {
    title: string;
    user = {} as IUser;

    constructor(public bsModalRef: BsModalRef) { }
    
    onSubmit() {
        console.log(this.user);
    }
}