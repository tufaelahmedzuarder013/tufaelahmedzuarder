import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectCategory } from "../types/project.types";

interface PortfolioState {
  activeCategory: ProjectCategory;
  searchQuery: string;
  selectedProjectId: number | null;
}

const initialState: PortfolioState = {
  activeCategory: "all",
  searchQuery: "",
  selectedProjectId: null,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<ProjectCategory>) => {
      state.activeCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedProjectId: (state, action: PayloadAction<number | null>) => {
      state.selectedProjectId = action.payload;
    },
    resetFilters: (state) => {
      state.activeCategory = "all";
      state.searchQuery = "";
      state.selectedProjectId = null;
    },
  },
});

export const { setCategory, setSearchQuery, setSelectedProjectId, resetFilters } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
