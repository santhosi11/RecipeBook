import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'angularproject';
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
