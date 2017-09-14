import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { IUser } from "./user.interface";

@Injectable()
export class UserService {
    private serviceBaseUrl = "api";
    private userSubject = new Subject<IUser[]>();
    $users = this.userSubject.asObservable();

    constructor(private readonly http: HttpClient){}

    loadUsers() {
        this.getUsers().subscribe(users => {
            this.userSubject.next(users);
        });
    }
    
    save(user: IUser): Observable<boolean> {
        return this.http.post<boolean>(`${this.serviceBaseUrl}/users/save`, user);
    }
    
    onComponentDestroy() {
        this.userSubject.next(undefined);
    }

    private getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${this.serviceBaseUrl}/users`);
    }

}