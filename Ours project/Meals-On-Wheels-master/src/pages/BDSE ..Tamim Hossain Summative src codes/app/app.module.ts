import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './user-side/log-in/log-in.component';
import { HomeComponent } from './user-interfaces/home/home.component';
import { RegistrationComponent } from './user-side/registration/registration.component';
import { RegConEmailComponent } from './user-side/reg-con-email/reg-con-email.component';
import { RegConComponent } from './user-side/reg-con/reg-con.component';
import { ForgotPasswordComponent } from './user-interfaces/forgot-pass/forgot-password/forgot-password.component';
import { ForgetPassConfirmComponent } from './user-interfaces/forgot-pass/forget-pass-confirm/forget-pass-confirm.component';
import { UserProfileComponent } from './user-interfaces/user-profile/user-profile.component';
import { UserSearchComponent } from './user-interfaces/user-search/user-search.component';
import { SearchListComponent } from './user-interfaces/search-list/search-list.component';
import { EditProfileComponent } from './user-interfaces/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LogInComponent,
   
    HomeComponent,
        RegistrationComponent,
        RegConEmailComponent,
        RegConComponent,
        ForgotPasswordComponent,
        ForgetPassConfirmComponent,
        UserProfileComponent,
        UserSearchComponent,
        SearchListComponent,
        EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  NavbarComponent,FooterComponent]
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef)
  {
    if (document.getElementsByTagName('app-root').length > 0)
    {
      appRef.bootstrap(AppComponent, 'app-root')
    }
    if (document.getElementsByTagName('app-navbar').length > 0)
    {
      appRef.bootstrap(NavbarComponent, 'app-navbar')
    }
  }
 }
