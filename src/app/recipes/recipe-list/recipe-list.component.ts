import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A Test Recipes', 'This is Simply a Test', 'https://i.guim.co.uk/img/media/ed96fcacae8ff1271d149ac843b9e1a195069526/0_210_3896_2338/master/3896.jpg?width=620&dpr=2&s=none'),
    new Recipe('A Test Recipes', 'This is Simply a Test', 'https://i.guim.co.uk/img/media/ed96fcacae8ff1271d149ac843b9e1a195069526/0_210_3896_2338/master/3896.jpg?width=620&dpr=2&s=none'),
    new Recipe('A Test Recipes', 'This is Simply a Test', 'https://i.guim.co.uk/img/media/ed96fcacae8ff1271d149ac843b9e1a195069526/0_210_3896_2338/master/3896.jpg?width=620&dpr=2&s=none')
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
