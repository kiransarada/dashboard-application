import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UserDashboardComponent } from "./user-dashboard.component";
import { UserFormComponent } from "./user-form.component";
import { UserListComponent } from "./user-list.component";
import { UserService } from "./user.service";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [UserDashboardComponent, UserFormComponent, UserListComponent],
    exports: [UserDashboardComponent],
    providers: [UserService]
})

export class UserModule { }