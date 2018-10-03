import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { FormEditComponent } from "./form-edit/form-edit.component";
import { ChatComponent } from './chat/chat.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const appRoutes: Routes = [
  { path: "", component: FormEditComponent },
  { path: "chat", component: ChatComponent },
  { path: "form-edit", component: FormEditComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, FormEditComponent, ChatComponent, PageNotFoundComponent],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
