import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../userlist/interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  URI: string = '';
  

  constructor(private http: HttpClient) {
    this.URI = 'https://rickandmortyapi.com/api/character';
  }

  getCharacters(page:number=1) {
    return this.http.get<Character>(`${this.URI}/?page=${page}`);
  }

  getCharacter(id: number) {
    return this.http.get<Character>(`${this.URI}/${id}`);
  }
}
