import { Component } from '@angular/core';
import { ChatbotService } from './services/chatbot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public chatBotHistory:any=[]
  public userHistory:any=[]
  
  title = 'chatbot';
  
  public chatbotresponse:any;
  constructor(private chatbotservice:ChatbotService) { }
  getVal(UserRes:any){
    // console.log(UserRes);
    this.userHistory.push(UserRes.response)
    this.chatbotservice.postData(UserRes).subscribe(res=>{
    this.chatbotresponse=res.response;
    // console.log(this.chatbotresponse);
    this.chatBotHistory.push(this.chatbotresponse)
    
    })
    console.log(this.userHistory)
    console.log(this.chatBotHistory)
  }
  // counter(){
  //   return new Array[this.userHistory.length]
  // }
 
  }


