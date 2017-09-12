import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { UserService } from "./user.service";
import { IUser } from "./user.interface";

@Component({
    selector: "sg-user-list",
    templateUrl: "app/User/user-list.component.html"
})

export class UserListComponent implements OnInit, OnDestroy {
    users: IUser[];
    userSubsription: Subscription;

    constructor(private readonly dataService: UserService) {}

    ngOnInit(): void {
        this.userSubsription = this.dataService.$users.subscribe(users => this.users = users);
        this.dataService.loadUsers();
    }

    ngOnDestroy(): void {
        this.userSubsription.unsubscribe();
        this.dataService.onComponentDestroy();
    }
}