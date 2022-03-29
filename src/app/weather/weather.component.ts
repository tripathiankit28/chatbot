import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public lat:any;
  public lon:any;
  public weatherData:any;
  

  constructor(private weather:WeatherService) { }

  ngOnInit(): void {
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.lon=success.coords.longitude;

        this.weather.getWeatherDataCoords(this.lat,this.lon).subscribe(data=>{
          this.weatherData=data;
        });
      })
    
  }
}
}

  
