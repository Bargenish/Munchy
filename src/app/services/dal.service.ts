import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DALService {
  
  constructor() { }

  getEntities(entityName: String, callback: (res: Object[]) => any) {
    callback([]);
  }

  getEntity(entityName: String, id: String): Object {
    return {};
  }
}
