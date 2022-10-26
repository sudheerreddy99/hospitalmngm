import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
{
path:'',component:HomeComponent
},
{
  path:'home',component:HomeComponent
  },
{
  path:'doctors',component:DoctorsComponent
},
{
  path:'patients',component:PatientsComponent
},
{
  path:'appointments',component:AppointmentsComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
