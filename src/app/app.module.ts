import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { MatInputModule } from '@angular/material/input';
import { RegisterService } from './services/register.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { DoctorComponent } from './components/doctor/doctor.component';
import { RouterModule } from '@angular/router';

import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { BookingpageComponent } from './components/bookingpage/bookingpage.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LogoutComponent } from './components/logout/logout.component';
import { AppoinmentService } from './services/appoinment.service';
import { AdminService } from './services/admin.service';
import { AdminComponent } from './components/admin/admin.component';
import { MatIconModule } from '@angular/material/icon';
import { BookingService } from './services/booking.service';
import { MatSelectModule } from '@angular/material/select'; 
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { DoctorloginService } from './services/doctorlogin.service';
import { DoctorviewService } from './services/doctorview.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    DoctorLoginComponent,
    BookingpageComponent,
    AdminComponent,
    RegisterComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatInputModule,
    HttpClientModule,
    DoctorComponent,
    RouterModule,
    MatDatepickerModule,
    LogoutComponent,
    MatIconModule,
    MatSelectModule
    
  ],

  providers: [MatSnackBar,RegisterService,LoginService,AppoinmentService,AdminService,BookingService,AuthService,AuthGuard,DoctorloginService,DoctorviewService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
