import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DALService } from './dal.service.js';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private dal: DALService) { }

  getUsers(): Observable<Object[]> {
    return of([]);
  }
}
