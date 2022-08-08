import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CategorieComponent } from './pages/categorie/categorie.component';

const routes: Routes = [
  {path : "home" , component:HomeComponent},
  {path : "" , component:LoginComponent},
  {path : "register" , component:RegisterComponent},
  {path : "categorie" , component:CategorieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
