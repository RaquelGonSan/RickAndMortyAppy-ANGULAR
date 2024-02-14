import { Component, OnInit, Input } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({

  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],

  
})
export class CardsComponent implements OnInit{

  @Input()
  params = {} as any;
  url: string = '';
  personajes:any = [];
  estado = 'Alive';
  

  constructor(private rickAndMortyService:  RickAndMortyService ) { }


ngOnInit(): void {

  /*this.rickAndMortyService.getPersonajes(this.params).subscribe((respuesta:any)=>{
  this.personajes = (respuesta.results);*/
  this.getPersonajes();
  this.url = (this.params.image);
  this.estado = (this.params.status);

 // this.getPersonajes();
  }

getPersonajes(){
  
  this.rickAndMortyService.getCharacters(this.params).subscribe((respuesta: any) => {
  this.personajes = (respuesta.results)
 


})
}

}





