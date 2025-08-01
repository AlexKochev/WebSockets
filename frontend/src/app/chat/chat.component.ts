import {Component, Input} from '@angular/core';
import {ChatService} from "./chat.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-chat',
  imports: [
    FormsModule,
    NgForOf
  ],
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  messages: any[] = [];
  message = '';
  @Input() public name: string | undefined;

  constructor(private chatService: ChatService) {
    this.chatService.messages$.subscribe((msg) => {
      this.messages.push(msg);
    });
  }

  send() {
    if (this.message.trim()) {
      this.chatService.sendMessage({ sender: this.name, content: this.message });
      this.message = '';
    }
  }
}
