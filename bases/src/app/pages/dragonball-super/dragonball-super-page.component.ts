import { Component, inject, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { Character } from "../../Interfaces/character.interface";
import { DragonballService } from "../services/dragonball.service";



@Component({
    templateUrl: "./dragonball-super-page.component.html",
    selector: 'dragonball-super',
    imports: [CharacterList, CharacterAddComponent],

})

export class DragonballSuperPageComponent{
    public dragonballService = inject(DragonballService);
    
}

