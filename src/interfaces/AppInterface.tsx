export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface ProductsState {
  products: Product[];
  searchTerm: string;
  filteredProducts: Product[];
}

export const initialState: ProductsState = {
  products: [],
  searchTerm: "",
  filteredProducts: [],
};
