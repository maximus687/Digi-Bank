import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  currentUser: User;

  constructor(private navController: NavController) {}

  logout() {
    this.navController.navigateRoot(['/', 'login']);
  }
}
