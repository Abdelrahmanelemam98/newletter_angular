import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StayUpdatedComponent } from './stay-updated/stay-updated.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: StayUpdatedComponent },
  { path: 'alert/:id', component: AlertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
