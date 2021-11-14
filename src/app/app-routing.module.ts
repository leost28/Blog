import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
