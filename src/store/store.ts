import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "@/features/portfolio/store/portfolioSlice";
import contactReducer from "@/features/contact/store/contactSlice";
import uiReducer from "./slices/uiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      portfolio: portfolioReducer,
      contact: contactReducer,
      ui: uiReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
