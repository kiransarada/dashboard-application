import { Component } from "@angular/core";
import { IUser } from "./user.interface";

@Component({
    selector: "sg-user-form",
    templateUrl: "app/User/user-detail.component.html"
})

export class UserFormComponent {
    user = {} as IUser;
    
    onSubmit() {
        console.log(this.user);
    }
}