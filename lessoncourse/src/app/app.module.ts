import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarAddComponent } from './car-add/car-add.component';
import { ConsoleService } from './console.service';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
