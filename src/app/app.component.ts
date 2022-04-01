import { Component } from '@angular/core';
import { ChatbotService } from './services/chatbot.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public chatBotHistory:any=[]
  public userHistory:any=[]
  
  title = 'chatbot';
  
  public answer:any;
  public demo:any;
  
  public chatbotresponse:any;
  constructor(private chatbotservice:ChatbotService,
              private weatherService:WeatherService
              ) { }
  getVal(UserRes:any){// this function is used for taking the user input
  
    this.userHistory.push(UserRes.response)
    this.demo=UserRes.response;
    console.log(this.demo);
    this.answer=this.demo.indexOf("weather")//checking different cases for weather api 
    if(this.demo.indexOf("weather")!=-1){
      if(this.demo.indexOf("tomorrow")!=-1){
        this.weatherService.default=true;
        this.answer=true;
        this.weatherService.def=10;
      }
      else {
     this.weatherService.default=true;
     this.weatherService.def=0;
     this.answer=true;
    }
  }
    else if(this.demo.indexOf("time")!=-1){// checking case for time and date
     this.chatbotresponse= Date();
     this.chatBotHistory.push(this.chatbotresponse)
    }
    
    else if(this.demo.indexOf("date")!=-1){
     this.chatbotresponse=Date();
     this.chatBotHistory.push(this.chatbotresponse)
    }
   
    else{
    this.chatbotservice.postData(UserRes).subscribe(res=>{
    this.chatbotresponse=res.response;
    this.chatBotHistory.push(this.chatbotresponse)
    })
  }
}
  
 
  }


