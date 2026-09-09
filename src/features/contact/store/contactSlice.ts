import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactFormData } from "../schemas/contact.schema";

interface ContactState {
  formData: ContactFormData;
  status: "idle" | "submitting" | "success" | "error";
  errorMessage: string | null;
}

const initialState: ContactState = {
  formData: {
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  },
  status: "idle",
  errorMessage: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof ContactFormData; value: string }>
    ) => {
      state.formData[action.payload.field] = action.payload.value;
    },
    setSubmitting: (state) => {
      state.status = "submitting";
      state.errorMessage = null;
    },
    setSuccess: (state) => {
      state.status = "success";
      state.errorMessage = null;
      state.formData = initialState.formData;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.status = "error";
      state.errorMessage = action.payload;
    },
    resetContactForm: (state) => {
      state.status = "idle";
      state.errorMessage = null;
    },
  },
});

export const { updateField, setSubmitting, setSuccess, setError, resetContactForm } =
  contactSlice.actions;
export default contactSlice.reducer;
