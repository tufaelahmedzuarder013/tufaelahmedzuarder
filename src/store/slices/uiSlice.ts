import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  mobileMenuOpen: boolean;
  isScrolled: boolean;
  activeModal: string | null;
  cursorVariant: "default" | "hover" | "text" | "hidden";
}

const initialState: UiState = {
  mobileMenuOpen: false,
  isScrolled: false,
  activeModal: null,
  cursorVariant: "default",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    setIsScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setActiveModal: (state, action: PayloadAction<string | null>) => {
      state.activeModal = action.payload;
    },
    setCursorVariant: (
      state,
      action: PayloadAction<"default" | "hover" | "text" | "hidden">
    ) => {
      state.cursorVariant = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  setMobileMenuOpen,
  setIsScrolled,
  setActiveModal,
  setCursorVariant,
} = uiSlice.actions;

export default uiSlice.reducer;
