import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ClockContainerComponent } from './clock-container/clock-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ClockContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
