import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapBarChart } from '@ng-icons/bootstrap-icons';
import {heroGift, heroInboxStack, heroMapPin, heroPencilSquare, heroUsers} from "@ng-icons/heroicons/outline";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DeashboardComponent } from './pages/deashboard/deashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderComponent,
    SideNavComponent,
    ProfileComponent,
    DeashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapBarChart, heroMapPin, heroUsers, heroInboxStack, heroPencilSquare, heroGift}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
