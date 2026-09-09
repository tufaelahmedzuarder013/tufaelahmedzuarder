import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  theme: "light" | "dark";
  mobileMenuOpen: boolean;
  isScrolled: boolean;
  activeModal: string | null;
  cursorVariant: "default" | "hover" | "text" | "hidden";
}

const initialState: UiState = {
  theme: "light",
  mobileMenuOpen: false,
  isScrolled: false,
  activeModal: null,
  cursorVariant: "default",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", state.theme);
        if (state.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", state.theme);
        if (state.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    },
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
  toggleTheme,
  setTheme,
  toggleMobileMenu,
  setMobileMenuOpen,
  setIsScrolled,
  setActiveModal,
  setCursorVariant,
} = uiSlice.actions;

export default uiSlice.reducer;
