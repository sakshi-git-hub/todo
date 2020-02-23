import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { CreateNodeComponent } from './create-node/create-node.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'create-node',pathMatch:"full"},
  {path:'create-node',component: CreateNodeComponent},
  {path:'create-node/:id',component: CreateNodeComponent},
  {path:'note-list',component: NoteListComponent},
  {path:'login',component: LoginComponent},{path:'register',component: RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
