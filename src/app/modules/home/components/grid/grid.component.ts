import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RickAndMortyService } from '../../../../services/rick-and-morty.service';
import { Character } from 'src/app/interfaces/rick-and-morty-data-interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  personajes: Character[] = [];
  params: any = {};
  id: string = '';
  page: number = 0;


  constructor(private rickAndMortyService: RickAndMortyService) {
    this.setPage();
  }
  ngOnInit(): void {
    this.page = 1;
    //this.setPage();
  }

  setPage() {
    this.rickAndMortyService
      .getPjPage(this.page).subscribe((respuesta: any) => {
        this.personajes = respuesta.results;
      });
    //console.log(this.page);
    //console.log(this.personajes);
  }

  prevPage() {
    this.page -= 1;
    this.setPage();
  }

  nextPage() {
    this.page += 1;
    this.setPage();
  }

  
  searchPersonajes(name:string){
    this.params.page = this.page;
      this.rickAndMortyService.filterPersonajes(name).subscribe((respuesta:any) =>{
      this.personajes = (respuesta.results);
    
   
    })
  }

 

}
