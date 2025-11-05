import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  constructor(private catgoriesService : CategoriesService) { }

  ngOnInit()  {
    console.log("Hello Categories Component");
    this.catgoriesService.getCategories().subscribe(categories => {
      this.catgoriesService.categories = categories;
      console.log(this.catgoriesService.categories);
    });
  }

}
