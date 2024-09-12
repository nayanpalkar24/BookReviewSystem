import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminModule } from './admin/admin.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UfooterComponent } from './user/ufooter/ufooter.component';
import { UheaderComponent } from './user/uheader/uheader.component';
import { UserBooklistComponent } from './user/user-booklist/user-booklist.component';
import { UserBookratingComponent } from './user/user-bookrating/user-bookrating.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UserprofileeditComponent } from './user/userprofileedit/userprofileedit.component';
import { AdminAddbookComponent } from './admin/admin-addbook/admin-addbook.component';
import { AdminBookeditComponent } from './admin/admin-bookedit/admin-bookedit.component';
import { AdminBooklistComponent } from './admin/admin-booklist/admin-booklist.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRatinglistComponent } from './admin/admin-ratinglist/admin-ratinglist.component';
import { AfooterComponent } from './admin/afooter/afooter.component';
import { AheaderComponent } from './admin/aheader/aheader.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';






@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PagenotfoundComponent
    // UfooterComponent,
    // UheaderComponent,
    // UserBooklistComponent,
    // UserBookratingComponent,
    // UserDashboardComponent,
    // UserLoginComponent,
    // UserRegisterComponent,
    // UserprofileComponent,
    // UserprofileeditComponent,
    // AdminAddbookComponent,
    // AdminBookeditComponent,
    // AdminBooklistComponent,
    // AdminDashboardComponent,
    // AdminLoginComponent,
    // AdminRatinglistComponent,
    // AfooterComponent,
    // AheaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    AdminModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
