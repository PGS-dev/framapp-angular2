/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';

export interface Category {
  [key: string] : {
    title: string
    id: string;
    description: string;
  };
}

@Injectable()
export class CategoriesService {
  private categoryList : Category = {};
  constructor(){}

  getCategories(){
    this.categoryList = {
      "-KToHgy4L-m2j8F_4gOH": {
        "description": "MH",
        "id": "",
        "title": "mh"
      },
      "notebooks": {
        "description": "Notebooks and ultrabooks and such",
        "id": "notebooks",
        "title": "Notebooks"
      },
      "phones": {
          "description": "Simple Phones description",
          "id": "phones",
          "title": "Phones"
      },
      "televisions": {
        "description": "Televisions description",
        "id": "televisions",
        "title": "Television"
      }
    };
    return this.categoryList;
  }
}
