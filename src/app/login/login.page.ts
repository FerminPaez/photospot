import { Component } from '@angular/core';
import { LoginServiceService } from '../providers/loginService.service';
import { FirebaseDatabaseService } from '../providers/firebase-database.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(public auth: LoginServiceService,
              //private fdbs: FirebaseDatabaseService
              ) {
                //console.log(this.fdbs.getUsers())
  }

  datosLogin: any;

  login(usuario, contraseña) {
      this.auth.login(usuario, contraseña);
  }

  registrar(usuario, contraseña) {
      this.auth.register(usuario, contraseña);
  }
  loginWhitGoogle() {
    this.datosLogin = this.auth.loginWithGoogle();

  }

}
