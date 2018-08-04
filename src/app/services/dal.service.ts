import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs/Observable';


const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DALService {
  private socket: SocketIOClient.Socket;
  private typeMap = new Map<string, string>();
  public categories: Object[] = [];
  public roles: Object[] = [];
  public sellers: Object[] = [];
  public users: Object[] = [];

  constructor() { 
    this.socket = socketIo(SERVER_URL, { transports: ['websocket'] });
    this.socket.on('error', (err) => console.log(`Websocket API ERROR: ${err}`));
    this.socket.on('message', this.handleMessage);

    this.typeMap.set('category', 'categories');
    this.typeMap.set('role', 'roles');
    this.typeMap.set('seller', 'sellers');
    this.typeMap.set('user', 'users');
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
}
