import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url="https://api.openweathermap.org/data/2.5/forecast"
  private APIKey="69dbb15411690d509325ff7a53cfcfa8";

  constructor(private http:HttpClient) {}
  // public today=false;
  // public tomorrow=false;
  public default=false;
  public def:any;


    getWeatherDataCoords(lat:any,lon:any){
      let params = new HttpParams()
      .set('lat',lat)
      .set('lon',lon)
      .set('units','metric')
      .set('appid',this.APIKey)
      

      return this.http.get<any>(this.url,{params})
    }
   
  }
