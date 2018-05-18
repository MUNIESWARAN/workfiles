import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { CakesComponent } from './cakes/cakes.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { CakeService } from './cake.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    CakesComponent,
    CakeDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CakeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
