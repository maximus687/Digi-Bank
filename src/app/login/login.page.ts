import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../core/authentication.service';
import { VaultService } from '../core/vault.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(
    private navController: NavController,
    private authentication: AuthenticationService,
    private vault: VaultService,
  ) {}

  ngOnInit() {}

  signIn() {
    this.authentication.login(this.email, this.password).subscribe(session => {
      if (session) {
        this.vault.login(session);
        this.navController.navigateRoot('/');
      }
    });
  }
}
