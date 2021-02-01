import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {HttpProvider} from "../../providers/http/http";
import {User} from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  account = {
    username: 'alexmoisa3',
    fullname: 'Alexandru Moisa',
    email: 'alexmoisa3@gmail.com',
    password: 'd123456'
  };

  private loginErrorString: string;
  private opt: string = 'signin';

  constructor(public http:HttpProvider, public userProvider: UserProvider, public menuCtrl: MenuController, public navCtrl: NavController,
    public translateService: TranslateService) {
    this.menuCtrl.enable(false);
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  doLogin() {
    this.http.get('my-profile.json').subscribe((profile) => {
      this.userProvider.user = <User>profile;
      this.navCtrl.setRoot('ListFriendsPage');
    }, (err) => {
      console.error(err);
    });

  }
}