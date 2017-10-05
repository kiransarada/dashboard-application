import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { IUser } from "../../app/User/user.interface";

export class MockUserService {
    private userSubject = new Subject<IUser[]>();
    $users = this.userSubject.asObservable();

    loadUsers() {
        const mockUsers = [{ id: 1, name: "John" }] as IUser[];
        this.userSubject.next(mockUsers);
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