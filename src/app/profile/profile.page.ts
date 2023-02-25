import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id_character: any = undefined;
  character: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) {
    this.id_character = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getCharacter(this.id_character);
  }

  getCharacter(id: number) {
    this.characterService.getCharacter(id).subscribe((res) => {
      this.character = res;
    });
  }
}
