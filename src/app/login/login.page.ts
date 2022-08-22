import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataGetterService } from "../services/data-getter.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string;
  passWord: string;

  constructor(private router: Router,
    private dataGetter: DataGetterService,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  login() {
    this.dataGetter.checkUser({
      username: this.userName,
      password: this.passWord
    }).subscribe(
      result => {
        if (result.hasOwnProperty('error')) {
          this.userNotExistAlert(result.error);
        } else {
          if (result.hasOwnProperty('token')) {
            this.dataGetter.setUser(this.userName);
            this.dataGetter.setToken(result.token);
            this.router.navigate(['/home']);
          } else {
            this.userNotExistAlert('Unexpected error');
          }
        }
      }
    )
  }

  async userNotExistAlert(message) {
    const alert = await this.alertController.create({
      header: 'Увага!',
      subHeader: 'Помилка аутентифікації',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
