import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  wea:any='';
  constructor(private route:Router,private weatherObj:WeatherService) { }

  ngOnInit(): void {
  }

  getW(){
    this.weatherObj.getWeather().subscribe(data=> this.wea=data)
    console.log(this.wea);
  }

  goback(){
    this.route.navigateByUrl('/')
  }

}
