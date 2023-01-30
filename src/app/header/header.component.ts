import { AuthService } from './../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  userSub:Subscription;
  constructor(private dataStorageService:DataStorageService, private authService:AuthService){}
  ngOnInit()
  {
    this.userSub=this.authService.user.subscribe(userData=>{
      this.isAuthenticated = !userData ? false :true;
      console.log(!userData);
      console.log(!!userData);

    });

  }
  onSaveData()
  {
    this.dataStorageService.storeRecipes();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout()
  {
    this.authService.logout();
  }

  ngOnDestroy()
  {
    this.userSub.unsubscribe();
  }

}






