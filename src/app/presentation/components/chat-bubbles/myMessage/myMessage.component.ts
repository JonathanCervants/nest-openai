import { Component } from '@angular/core';

@Component({
  selector: 'app-my-message',
  imports: [],
  templateUrl: './myMessage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MyMessageComponent { }
