import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { Character } from '../../../Interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
