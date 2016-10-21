export interface Category {
  [key: string] : {
    title: string
    id: string;
    description: string,
    link?: Array<any>,
    isActive? : boolean
  }
}
