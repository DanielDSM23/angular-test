import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  constructor(private catgoriesService : CategoriesService) { }
  categories: any[] = [];
  search: string = '';
  submitSearch(form: NgForm) {
   this.categories = this.catgoriesService.filterCategories(this.search);
  }
  clearSearch() {
    console.log("Clear search");
    this.search = '';
    this.categories = this.catgoriesService.filterCategories(this.search);
  }
  ngOnInit()  {
    console.log("Hello Categories Component");
    this.catgoriesService.getCategories().subscribe(categories => {
      this.catgoriesService.categories = categories;
      this.categories = this.catgoriesService.categories;
      console.log(this.categories);
    });
  }

}
