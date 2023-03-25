import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { BookingpageComponent } from './components/bookingpage/bookingpage.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminComponent } from './components/admin/admin.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { BookedComponent } from './components/booked/booked.component';
import { BookedDetailsComponent } from './components/booked-details/booked-details.component';
import { DoctorviewComponent } from './components/doctorview/doctorview.component';
import { PaymentComponent } from './components/payment/payment.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path:'loginpage',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'registerpage',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'doctorpage',
    component:DoctorComponent,
    canActivate:[AuthGuard],
    pathMatch:'full'
  },
  {
    path:'doctorloginpage',
    component:DoctorLoginComponent,
    pathMatch:'full'
  },
  {
    path:'bookingpage',
    component:BookingpageComponent,
    canActivate:[AuthGuard],
    pathMatch:'full'
  },
  {
    path:'logoutpage',
    component:LogoutComponent,
    pathMatch:'full'
  },
  {
    path:'adminpage',
    component:AdminComponent,
    pathMatch:'full'
  },
  {
    path:'doctordetailpage',
    component:DoctorDetailsComponent,
    canActivate:[AuthGuard],
    pathMatch:'full'
  },
  {

    path:'bookeddetailpage',
    component:BookedComponent,
    canActivate:[AuthGuard],
    pathMatch:'full'
  },
  {
    path:'bookedpage',
    component:BookedDetailsComponent,
    canActivate:[AuthGuard],
    pathMatch:'full'
  },
  {
    path:'doctorbookedview',
    component:DoctorviewComponent,
    canActivate:[AuthGuard],
    pathMatch:'full'
  },
  {
    path:'paymentpage',
    component:PaymentComponent,
    pathMatch:'full'
  },
  {
    path:'editpage',
    component:EditAppointmentComponent,
    pathMatch:'full'
  },
  {
    path:'contactpage',
    component:ContactComponent,
    pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
