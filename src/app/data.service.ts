import { Injectable } from '@angular/core';
import {ClassModule} from './class.module'
import{HttpClient} from '@angular/common/http'
import { Observable,throwError,BehaviorSubject } from 'rxjs';
import { tap, catchError,map } from 'rxjs/operators';
import { Posts } from './posts';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentUserSubject:BehaviorSubject<any>
 constructor(private httpclient:HttpClient){}
 getdatas():Observable<any>{return this.httpclient.get("http://localhost:3000/datas")}
  getapi():Observable<any>
  {
     return this.httpclient.get("https://api.first.org/data/v1/countries") 
  }

  getUser (id: number): Observable<ClassModule[]> {
    const url = `${"http://localhost:3000/posts"}/${id}`;
    return this.httpclient.get<ClassModule[]>(url).pipe(
    catchError(this.handleError)
    );
    }
    addUser (user: ClassModule): Observable<any> {
        return this.httpclient.post<ClassModule[]>("http://localhost:3000/posts", user).pipe(
        catchError(this.handleError)
      );
    }
    deleteUser (id:number): Observable<any> {
        const url = `${"http://localhost:3000/posts"}/${id}`;
        return this.httpclient.delete<ClassModule[]>(url).pipe(
        catchError(this.handleError)
      );
    }
    updateUser (user:ClassModule): Observable<any> {
        console.log(user.id)
        const url = `${"http://localhost:3000/posts"}/${user.id}`;
        return this.httpclient.put<ClassModule[]>(url,user).pipe(
        catchError(this.handleError)
      );
    }
    private handleError(error: any) {
        alert("empty")
        return throwError("empty");
        
      }
      login(username: string, password: string) {
        return this.httpclient.post<any>(`http://localhost:3000/posts`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }
}
