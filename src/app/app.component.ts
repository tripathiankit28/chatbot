import { Component } from '@angular/core';
import { ChatbotService } from './services/chatbot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'chatbot';
  public chatbotresponse:any;
  UserRes = "";
  constructor(private chatbotservice:ChatbotService) { }
  getVal(UserRes:any){
    console.log(UserRes);
    this.chatbotservice.postData(UserRes).subscribe(res=>{
    this.chatbotresponse=res;
    console.log(this.chatbotresponse);
    })

  }

}
