import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from 'src/environements/environement.prod';
import { Character, InfoResults } from '../interfaces/rick-and-morty-data-interface';



@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseUrl: string = 'https://rickandmortyapi.com/api';

  listaPj = [] as any;
  constructor(private http: HttpClient) { }

  getCharacters(params: any){
    return this.http.get(environement.baseUrl + environement.character, {params});
 
  }

  getPjPage(page:number){
    return this.http.get(environement.baseUrl + environement.character, {params:{
      'page': page,
      'limit': 20
    }});
 
  }

  geturl(url:string){ 
    return this.http.get(url);
  }


filterPersonajes(name: string){
   return this.http.get<InfoResults>(`${this.baseUrl}/character/?name=${name}`);
 
  
 }
 getCharactersById(id: string){
   return this.http.get<InfoResults>(`${this.baseUrl}/character/${id}`);
  
 
  


 }



}
