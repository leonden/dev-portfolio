import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ConnectComponent } from './components/pages/connect/connect.component';
import { MobileNavigationComponent } from './components/global/mobile-navigation/mobile-navigation.component';
import { DesktopNavigationComponent } from './components/global/desktop-navigation/desktop-navigation.component';
import { CardComponent } from './components/global/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ConnectComponent,
    MobileNavigationComponent,
    DesktopNavigationComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
