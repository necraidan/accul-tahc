import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent) },
  {
    path: 'chat',
    loadChildren: () => import('./features/chat/chat.module').then((m) => m.ChatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
