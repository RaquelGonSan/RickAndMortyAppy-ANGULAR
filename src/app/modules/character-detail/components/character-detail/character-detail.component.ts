import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { Result } from '../../../../../../../03_PokeApp/src/app/interfaces/poke-list.interface';
import { map } from 'rxjs';
import { Location } from '../../../../interfaces/rick-and-morty-data-interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  params = {} as any;
  characterId: string = '';
  personajes: any = [];
  personaje: any = null;
  url: string = '';
  image: string='';
  estado = 'Alive';
  location = '';
  name='';
  episodes: any = [];
  loading = true;
 

  constructor(
    private actRouter: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {
    this.characterId = this.actRouter.snapshot.paramMap.get('id') as string;
    console.log(this.characterId);
  }

   ngOnInit(): any{
    this.getPersonajeId();
    setInterval(() => {
      this.loading = false;
      },500)
   

  }
  ngAfterContentInit(){
   
  }

  

  getPersonajeId() {
    this.rickAndMortyService.getCharactersById(this.characterId).subscribe((respuesta: any) => {
        this.personajes = respuesta;
        this.image = respuesta.image;
   

        this.personaje.episode.forEach((res: any) =>{
      
          this.episodes.push(res)
          console.log(res);
         } );
       
       /* this.personaje = respuesta.name;
        this.url = respuesta.url;
        this.image = respuesta.image;
        this.estado = respuesta.status;*/

      });
  }





}
