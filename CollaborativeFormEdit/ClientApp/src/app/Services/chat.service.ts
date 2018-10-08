import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private connection;

  constructor(private messageSevice: MessagesService) { }

  public InitConnection() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("/ChatHub")
      .build();

    this.connection.on("MessageRecieved", data => {
      console.log(data);
      this.messageSevice.Messages.push({ name: data.username, message: data.message });
    });

    this.connection.start().catch(err => console.log(err));
  }

  public SendMessage(name, message) {
    this.connection.invoke("MessageSent", { "Username": name, "Message": message })
      .catch(err => console.log(err));
  }
}
