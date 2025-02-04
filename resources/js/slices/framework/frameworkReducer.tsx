import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface FrameworkState {
  thisFrameworkProvision: any[]; // Adjust type as needed
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FrameworkState = {
  thisFrameworkProvision: [],
  status: "idle",
  error: null,
};

export const fetchFrameworkProvision = createAsyncThunk(
  "framework/fetchFrameworkProvision",
  async (frameworkId: number) => {
    const response = await axios.get(`/get-framework/${frameworkId}`);
    return response.data;
  }
);

const frameworkSlice = createSlice({
  name: "framework",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFrameworkProvision.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchFrameworkProvision.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.status = "succeeded";
          state.thisFrameworkProvision = action.payload;
        }
      )
      .addCase(fetchFrameworkProvision.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default frameworkSlice.reducer;
