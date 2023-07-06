import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'home', component: HomeComponent},
  { path: 'registration',component: RegistrationComponent},
  { path: 'reg-con-email',component: RegConEmailComponent},
  { path: 'reg-con',component: RegConComponent},
  { path: 'forgot-password',component: ForgotPasswordComponent},
  { path: 'forget-pass-confirm',component: ForgetPassConfirmComponent},
  { path: 'user-profile',component: UserProfileComponent},
  { path: 'user-search',component:UserSearchComponent},
  { path: 'search-list',component:SearchListComponent},
  { path: 'edit-profile',component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
