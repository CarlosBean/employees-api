import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { provideImgixLoader } from '@angular/common';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideImgixLoader(environment.API_IMG_URL)],
  bootstrap: [AppComponent],
})
export class AppModule {}
