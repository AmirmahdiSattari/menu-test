export interface Category {
    id: number;
    name: string;
    icon?: string;
  }
  
  export interface Subcategory {
    id: number;
    name: string;
    parentId: number;
    icon?: string;
  }
  
  export interface Child {
    id: number;
    name: string;
    parentId: number;
  }
  