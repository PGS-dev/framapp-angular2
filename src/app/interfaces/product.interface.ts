import { Category } from "./categories.interface";

export interface Product {
  amount: number,
  category: Category,
  description: string,
  edit: string,
  id: string,
  imageUrl: string,
  price: number,
  promoted: Boolean,
  title: string

}
