import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-rooting.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';

import { ArticleService } from './article.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    MaterialModule.forRoot()
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
