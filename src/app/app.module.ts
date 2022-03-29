import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotService } from './services/chatbot.service';
import {HttpClientModule} from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './services/weather.service';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChatbotService,
             WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
