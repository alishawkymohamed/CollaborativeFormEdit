import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ChatService } from '../Services/chat.service';
import { MessagesService } from '../Services/messages.service';
import { UsernameService } from '../Services/username.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {
  message = "";

  @ViewChild("exampleModal")
  toggleBtn: ElementRef;
  username: string = "";

  messages = [];
  constructor(private chat: ChatService, private messagesService: MessagesService, private userService: UsernameService) {
    this.messages = this.messagesService.Messages;
  }

  ngOnInit() {
    this.chat.InitConnection();
  }

  ngAfterViewInit(): void {
    if (!this.userService.CurrentUserName) {
      this.toggleBtn.nativeElement.click();
    }
  }

  onSubmit() {
    this.userService.CurrentUserName = this.username;
    this.toggleBtn.nativeElement.click();
  }

  Send(txtarea) {
    if (this.message) {
      this.chat.SendMessage(this.userService.CurrentUserName, this.message)
      this.message = "";
    }
  }
}
