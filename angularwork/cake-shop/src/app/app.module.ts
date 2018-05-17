import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { CakesComponent } from './cakes/cakes.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CakesComponent,
    CakeDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
