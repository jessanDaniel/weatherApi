
import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginModule } from "./login/login.module";
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from "./weather.service";

@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule,AppRoutingModule,LoginModule,HttpClientModule],
    providers:[WeatherService],
    bootstrap:[AppComponent]
    
})
export class AppModule{}