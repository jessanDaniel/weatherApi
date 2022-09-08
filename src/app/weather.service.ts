import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeather(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=b190a0605344cc4f3af08d0dd473dd25');
  }
}
