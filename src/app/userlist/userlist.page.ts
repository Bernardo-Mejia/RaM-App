import { Component, OnInit } from '@angular/core';
import { Character } from './interfaces/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  characters: any = [];
  page: number = 1;

  constructor(private character: CharacterService) {}

  ngOnInit() {
    // this.http
    //   .get<Character>('https://rickandmortyapi.com/api/character')
    //   .subscribe((res) => {
    //     // console.log(res);
    //     this.characters = res.results;
    //   });
    this.getCharacters(this.page);
  }

  getCharacters(page: number) {
    page = this.page;
    this.character.getCharacters(page).subscribe((res) => {
      this.characters = res.results;
    });
  }

  prevCharacters() {
    this.page--;
    this.getCharacters(this.page);
  }
  nextCharacters() {
    this.page++;
    this.getCharacters(this.page);
  }
}
