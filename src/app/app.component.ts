import { Component } from '@angular/core';
import { ChatbotService } from './services/chatbot.service';
import { Router } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
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
              private router:Router,
              private weatherService:WeatherService
              ) { }
  getVal(UserRes:any){
    // console.log(UserRes);
    this.userHistory.push(UserRes.response)
    this.demo=UserRes.response;
    console.log(this.demo);
    this.answer=this.demo.indexOf("weather")
    if(this.demo.indexOf("weather")!=-1){
      if(this.demo.indexOf("tomorrow")!=-1){
        this.weatherService.tomorrow=true;
        this.answer=12;
      }
      else if(this.demo.indexOf("days")!=-1){
        this.weatherService.default=true;
        this.answer=12
       }
      else {
     this.weatherService.today=true;
     this.answer=12;
    }
     
    //  console.log(this.answer);
    }
  
    
    
    else if(this.demo.indexOf("time")!=-1){
     this.chatbotresponse= Date();
     this.chatBotHistory.push(this.chatbotresponse)
    }
    
    else if(this.demo.indexOf("date")!=-1){
     this.chatbotresponse=Date();
     this.chatBotHistory.push(this.chatbotresponse)
    }



    // if(UserRes.response==="date"){
    //   console.log(UserRes);
    //   this.chatbotresponse=  Date();
    // console.log(this.chatbotresponse)
    // this.chatBotHistory.push(this.chatbotresponse)
    // }
    // else if (UserRes.response==="humidity"|| UserRes.response=="weather" || UserRes.response=="temperature"){
    //   this.dateAndTime=1;
    // }
   
    else{
    this.chatbotservice.postData(UserRes).subscribe(res=>{
    this.chatbotresponse=res.response;
    // console.log(this.chatbotresponse);
    this.chatBotHistory.push(this.chatbotresponse)
    })

    // console.log(this.userHistory)
    // console.log(this.chatBotHistory)
  }
}
  
 
  }


