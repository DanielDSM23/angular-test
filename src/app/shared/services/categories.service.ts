import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) { }

  categories: any[] = [];

  getCategories() : Observable<any> {
    return this.http.get('http://localhost:3000/categories');
  }

  filterCategories(searchTerm: string) : any[] {
    if (!searchTerm) {
      return this.categories;
    }

    return this.categories.filter(category => 
      category.nom.toLowerCase().includes(searchTerm.toLowerCase()) 
      
    )
  }

}
