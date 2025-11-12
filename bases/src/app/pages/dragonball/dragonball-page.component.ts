import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


interface Character{
    id: number;
    name: string;
    power: number;
}

@Component({
    templateUrl: "./dragonball-page.component.html",
    imports: []

})

export class DragonballPage{
     characters = signal<Character[]>([
        {id: 1, name: 'Goku', power:9001},
        {id: 1, name: 'Vegeta', power:8000},
        {id: 1, name: 'Piccolo', power:3000},
     ]);


}

