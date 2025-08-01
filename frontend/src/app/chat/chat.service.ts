import { Injectable } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private client: Client;
  private messageSubject = new Subject<any>();

  public messages$ = this.messageSubject.asObservable();

  constructor() {
    this.client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/chat'),
      reconnectDelay: 5000,
    });

    this.client.onConnect = () => {
      this.client.subscribe('/topic/messages', (message: IMessage) => {
        this.messageSubject.next(JSON.parse(message.body));
      });
    };

    this.client.activate();
  }

  sendMessage(message: any) {
    this.client.publish({ destination: '/app/send', body: JSON.stringify(message) });
  }
}
