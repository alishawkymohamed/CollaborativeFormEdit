import { Injectable } from "@angular/core";
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: "root"
})
export class SignalrService {
  private connection;
  constructor() {
    this.InitConnection();
  }

  private InitConnection() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("/FormEditHub")
      .build();

    this.connection.on("UserFocusedInput", data => {
      let input = document.getElementById(data.inputId);
      input.setAttribute("disabled", "disabled");
      let inputError = document.getElementById(data.inputId + "Error");
      inputError.innerText = data.username + " is Typing Here ..";
    });

    this.connection.on("UserBluredInput", data => {
      let input = document.getElementById(data.inputId);
      input.removeAttribute("disabled");
    });

    this.connection.on("UserTypingInInput", data => {
      let input = document.getElementById(data.inputId);
      input["value"] = data.text;
    });

    this.connection.start().catch(err => console.log(err));
  }

  public InputFocused(username: string, inputId: string) {
    this.connection
      .invoke("UserFocused", username, inputId)
      .catch(err => console.error(err));
  }

  public InputBlured(inputId: string) {
    this.connection
      .invoke("UserBlured", inputId)
      .catch(err => console.error(err));
  }

  public UserTyping(inputId: string, Text: string) {
    this.connection
      .invoke("UserTyping", inputId, Text)
      .catch(err => console.error(err));
  }
}
