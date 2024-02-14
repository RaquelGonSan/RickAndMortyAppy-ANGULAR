import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    NgOptimizedImage,
    MatIconModule,
    MatListModule,
    MatTableModule
  ]
})
export class CharacterDetailModule { }
