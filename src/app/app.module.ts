import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; // Import the module

//import {HeaderComponent} from './components/header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PopularComponent } from './components/pages/popular/popular.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatButtonToggleModule,
    BsDropdownModule,
    FormsModule
    // HeaderComponent,
    // FooterComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
