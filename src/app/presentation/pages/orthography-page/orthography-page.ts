import { Component } from '@angular/core';
import { ChatMessagesComponent } from "../../components/chat-bubbles/chatMessages/chatMessages.component";
import { MyMessageComponent } from '../../components/chat-bubbles/myMessage/myMessage.component';

@Component({
  selector: 'app-orthography-page',
  imports: [ChatMessagesComponent, 
    MyMessageComponent],
  templateUrl: './orthography-page.html',
  styleUrl: './orthography-page.css'
})
export default class OrthographyPage {

}
