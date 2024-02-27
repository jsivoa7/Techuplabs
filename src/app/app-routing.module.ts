import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import{AppComponent} from './app.component'
import { SampleComponent } from './sample/sample/sample.component';
import { ChildofsampleComponent } from './sample/childofsample/childofsample.component';
import { AuthGuardService as AuthGuard} from './auth/auth-guard.service';
const routes: Routes = [{path:"", component: SampleComponent},{ path: 'childofsample/:nameof', component: ChildofsampleComponent },{ path: 'sample', component: SampleComponent },{ path: '**', redirectTo: '' }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
