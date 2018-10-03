import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public Messages: ChatMessage[] = [];
  constructor() { }
}

class ChatMessage {
  name: string;
  message: string;
}