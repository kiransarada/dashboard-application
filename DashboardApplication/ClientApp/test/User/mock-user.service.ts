import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { IUser } from "../../app/User/user.interface";

export class MockUserService {
    private userSubject = new Subject<IUser[]>();
    $users = this.userSubject.asObservable();

    private mockUsers = [
        { id: 1, name: "John", isActive: true },
        { id: 2, name: "Emily", isActive: false },
        { id: 3, name: "Drone", isActive: true }
    ] as IUser[];

    loadUsers() {
        this.userSubject.next(this.mockUsers);
    }

    save(user: IUser): Observable<boolean> {
        return Observable.create();
    }

    delete(user: IUser): Observable<boolean> {
        return Observable.create();
    }

    onComponentDestroy() {
        this.userSubject.next(undefined);
    }
}