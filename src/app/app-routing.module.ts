import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, IntroComponent } from './modules';
import { CharacterDetailComponent } from './modules/character-detail';

const routes: Routes = [
  { path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
 {
  path: 'home/character-detail/:id',
    component: CharacterDetailComponent,
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
