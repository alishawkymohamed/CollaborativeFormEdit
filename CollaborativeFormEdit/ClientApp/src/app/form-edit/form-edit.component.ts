import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { SignalrService } from "../Services/signalr-service.service";
import { UsernameService } from "../Services/username.service";

@Component({
  selector: "app-form-edit",
  templateUrl: "./form-edit.component.html",
  styleUrls: ["./form-edit.component.css"]
})
export class FormEditComponent implements OnInit, AfterViewInit {
  @ViewChild("exampleModal")
  toggleBtn: ElementRef;
  username: string = "";
  constructor(
    private signalR: SignalrService,
    private usernameservice: UsernameService
  ) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    if (!this.usernameservice.CurrentUserName) {
      this.toggleBtn.nativeElement.click();
    }
  }

  onSubmit() {
    this.usernameservice.CurrentUserName = this.username;
    this.toggleBtn.nativeElement.click();
  }

  InputFocused(inputId: string) {
    this.signalR.InputFocused(this.usernameservice.CurrentUserName, inputId);
  }

  InputBlured(inputId: string) {
    this.signalR.InputBlured(inputId);
  }

  InputKeyup(inputId: string, value: string) {
    this.signalR.UserTyping(inputId, value);
  }
}
