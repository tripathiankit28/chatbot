import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient) { }
  postData(data:any){
    return this.http.post<any>("http://localhost:3000/chatbot/data", data);
  }
}


