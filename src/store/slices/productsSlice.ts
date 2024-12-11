import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, Product } from "../../interfaces/AppInterface";
import axios from "axios";

export const fetchProductsData = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setSearchedRes(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.filteredProducts = state.products.filter((product) => {
        product.title.toLowerCase().includes(state.searchTerm.toLowerCase());
      });
    },
    setFilterRes(state, action: PayloadAction<Product[]>) {
      state.filteredProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsData.fulfilled, (state, action) => {
      (state.products = action.payload),
        (state.filteredProducts = action.payload);
    });
  },
});

export const { setFilterRes, setSearchedRes } = productsSlice.actions;
export default productsSlice.reducer;
