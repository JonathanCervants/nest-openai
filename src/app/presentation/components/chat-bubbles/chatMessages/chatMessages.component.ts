import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  imports: [],
  templateUrl: './chatMessages.component.html',
})

export class ChatMessagesComponent { 
  @Input({required:true}) text!:string;
}
