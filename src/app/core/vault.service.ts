import { Injectable } from '@angular/core';
import { Session } from '../models';
import {
  AuthMode,
  IonicIdentityVaultUser,
  IonicNativeAuthPlugin,
} from '@ionic-enterprise/identity-vault';
import { Platform } from '@ionic/angular';
import { BrowserVaultPlugin } from './browser-vault.plugin';

@Injectable({
  providedIn: 'root',
})
export class VaultService extends IonicIdentityVaultUser<Session> {
  constructor(
    private browserVaultPlugin: BrowserVaultPlugin,
    platform: Platform,
  ) {
    super(platform, {
      unlockOnAccess: true,
      hideScreenOnBackground: true,
      lockAfter: 5000,
      authMode: AuthMode.SecureStorage,
    });
  }

  getPlugin(): IonicNativeAuthPlugin {
    if ((this.platform as Platform).is('hybrid')) {
      return super.getPlugin();
    }
    return this.browserVaultPlugin;
  }
}
