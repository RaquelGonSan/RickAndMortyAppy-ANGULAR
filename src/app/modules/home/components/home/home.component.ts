import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavbarComponent } from 'src/app/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  personajes: any[] = [];
  params = {} as any;
  url: string = '';
  page: number =0;

  constructor(private rickAndMortyService: RickAndMortyService) {
  
  }

  ngOnInit(): void {
    this.params.page = 0;
    this.getPersonajes();
    
      
     
  }
 


  getPersonajes(){
    this.params.page +=1;
    this.rickAndMortyService.getCharacters(this.params).subscribe((respuesta: any) => {
      this.personajes = (respuesta.results);

  })
}





}
