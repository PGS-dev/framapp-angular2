import { Component, OnInit } from '@angular/core';
import { Category } from '../../../interfaces/';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { FirebaseService } from '../../../services/';

@Component({
  selector: 'app-categories-admin-add',
  templateUrl: 'categories-admin-add.component.html',
  styleUrls: ['categories-admin-add.component.scss']
})
export class CategoriesAdminAddComponent implements OnInit {
  private category: FormGroup;
  public categoryDetails: Category = {
    title: '',
    description: '',
    id: ''
  };
  public categoryToEdit: any;
  private status: string;
  constructor(private fb: FormBuilder, private router: ActivatedRoute, private firebase: FirebaseService){}

  onSubmit({ value, valid }: { value: Category, valid: boolean }) {
    this.firebase.addResource('categories', this.categoryDetails);
  }

  save(){
    if(this.status === 'create'){
      this.addCategory()
    } else {
      this.updateCategory(this.status);
    }
  }
  addCategory(){
    this.firebase.addResource('categories', this.categoryDetails);
  }
  updateCategory(path){
    this.firebase.updateResource('categories/' + path, this.categoryDetails);
  }
  displayCategoryDetails(title, description, id){
    this.categoryDetails.title = title || "";
    this.categoryDetails.description = description || "";
    this.categoryDetails.id = id || "";
  }
  getStatus(){
    this.router
      .data
      .subscribe((routeObject) => {
        this.status = routeObject['status'];
        if (this.status !== 'create'){
          this.getCategoryDetails();
        }
      });
  }
  getCategoryDetails(){
    this.router
      .params
      .subscribe((routeObject) => {
        this.status = routeObject['categoryId'];
        // console.log( routeObject, 'categories/' + routeObject['categoryId'] + "/")
        this.firebase.getResource('categories/' + routeObject['categoryId'] + "/").subscribe((object) => {
          // console.log('categories/' + this.status, "object", object);
          this.categoryToEdit = object;
          this.displayCategoryDetails(object.title, object.description, object.id);
        });
      });
  }
  ngOnInit(){
    this.getStatus();
    this.category = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      id: ['']
    });
  }
}
