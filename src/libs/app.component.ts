import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  private async initializeApp(): Promise<void> {
    await this.platform.ready();

    if (this.platform.is('cordova')) {
      this.statusBar.overlaysWebView(false);
      this.statusBar.hide();
      this.splashScreen.hide();
    } else {
      console.warn('The platform is NOT Cordova!');
    }
  }

  public closeMenu(): void {
    this.menuCtrl.close();
  }
}
