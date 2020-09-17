import { ChitietComponent } from './chitiet/chitiet.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  }, 
  {
    path: 'chitiet/:id',
    component: ChitietComponent,
  }, 
];
@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent, 
    ChitietComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
