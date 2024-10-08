import { Component, NgModule } from '@angular/core';
import { ChatintComponent } from '../chatint/chatint.component'; 
import { AppComponent } from '../app/app.component';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../loginservice';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ChatintComponent, CommonModule], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(private router: Router, private chat:ChatintComponent, private loginservice :LoginService) {}
  modalshow = false;
  logoutclick(){
    this.showmodal();
  }
  showmodal(){
    this.modalshow = true;
  }
  logout(){
    this.chat.saveConversation();
    this.loginservice.loginname='';
    this.router.navigate(['/Mind-mender']);
  }
}
