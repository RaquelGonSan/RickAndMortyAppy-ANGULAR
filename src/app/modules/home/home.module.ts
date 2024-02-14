import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardsComponent, HomeComponent, IntroComponent, GridComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from 'src/app/components';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';






@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    CardsComponent,
    GridComponent,


    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    NgOptimizedImage,
    MatIconModule,
    NavbarComponent,
    FormsModule,
    MatInputModule,
    RouterLink



    
  ],
  exports:[
   
  ]

  
})
export class HomeModule { }
