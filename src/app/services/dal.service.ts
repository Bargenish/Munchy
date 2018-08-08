import { Injectable, Inject } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const SERVER_URL = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

interface Document {
  _id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DALService {
  private socket: SocketIOClient.Socket;
  private typeMap = new Map<string, string>();
  public categories: any[] = [];
  public roles: any[] = [];
  public sellers: any[] = [];
  public users: any[] = [];

  constructor(@Inject(HttpClient) private http: HttpClient) { 
    this.typeMap.set('category', 'categories');
    this.typeMap.set('role', 'roles');
    this.typeMap.set('seller', 'sellers');
    this.typeMap.set('user', 'users');
    
    this.socket = socketIo(SERVER_URL, { transports: ['websocket'] });
    this.socket.on('error', (err) => console.log(`Websocket API ERROR: ${err}`));
    this.socket.on('message', this.handleMessage);

    this.getEntities('seller');
    this.getEntities('category');
    this.getEntities('user');
    this.getEntities('role');
  }

  getEntities(entityName: string) {
    this.socket.emit(entityName);
  }

  handleMessage = async (msg) => {
    if (!msg || !msg.type || !msg.data) {
      console.log(`Websocket API ERROR: either the message object is missing or one of it's properties`);
    }

    try {
      this[this.typeMap.get(msg.type)] = msg.data;
    } catch (error) {
      console.log(`Websocket API ERROR: ${error}`);
    }
  }

  createEntity(entityName: string, document: any) {
    return this.http.post(`${SERVER_URL}/api/${this.typeMap.get(entityName)}`,
                   document,
                   httpOptions);
  }

  updateEntity(entityName: string, document: Document) {
    return this.http.put(`${SERVER_URL}/api/${this.typeMap.get(entityName)}/${document._id}`,
                  document,
                  httpOptions);
  }

  deleteEntity(entityName: string, documentId: string){
    return this.http.delete(`${SERVER_URL}/api/${this.typeMap.get(entityName)}/${documentId}`);
  }

  getCategorySellers() {
    return this.http.get<any>(`${SERVER_URL}/api/categories/sellers`);
  }

  getCitiesOrders() {
    return this.http.get<any>(`${SERVER_URL}/api/sellers/cityOrders`);
  }
}
