import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { DataService } from "./data.service";
import { IUser } from "./Interfaces/user.interface";

@Component({
    selector: "sg-app",
    templateUrl: "app/app.component.html"
})

export class AppComponent implements OnInit, OnDestroy {
    users: IUser[];
    userSubsription: Subscription;

    constructor(private readonly dataService: DataService) {}

    ngOnInit(): void {
        this.userSubsription = this.dataService.$users.subscribe(users => this.users = users);
        this.dataService.loadUsers();
    }

    ngOnDestroy(): void {
        this.userSubsription.unsubscribe();
        this.dataService.onComponentDestroy();
    }
}