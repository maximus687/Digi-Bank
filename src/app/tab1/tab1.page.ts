import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../core/authentication.service';
import { VaultService } from '../core/vault.service';
import { User } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  currentUser: User;

  constructor(
    private navController: NavController,
    private authentication: AuthenticationService,
    private vault: VaultService,
  ) {}

  async ionViewWillEnter() {
    const session = await this.vault.restoreSession();
    this.currentUser = session?.user;
  }
  logout() {
    this.authentication
      .logout()
      .pipe(
        tap(() => {
          this.vault.logout();
          this.navController.navigateRoot(['/', 'login']);
        }),
      )
      .subscribe();
  }
}
