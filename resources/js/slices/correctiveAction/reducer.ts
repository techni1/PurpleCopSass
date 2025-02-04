import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface correctiveActionState {
  correctiveActionData: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: correctiveActionState = {
  correctiveActionData: [],
  status: "idle",
  error: null,
};

export const fetchCorrectiveActionData = createAsyncThunk(
  "correctiveAction/fetchCorrectiveActionData",
  async () => {
    const response = await axios.get("/get-corrective-action");
    return response.data;
  }
);

const correctiveActionSlice = createSlice({
  name: "correctiveAction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCorrectiveActionData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCorrectiveActionData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.correctiveActionData = action.payload;
      })
      .addCase(fetchCorrectiveActionData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch assignee list";
      });
  },
});

export const getCorrectiveAction = (state: any) =>
  state.correctiveAction.correctiveActionData;
export const getCorrectiveActionStatus = (state: any) =>
  state.correctiveAction.status;
export const getCorrectiveActionError = (state: any) =>
  state.correctiveAction.error;

export default correctiveActionSlice.reducer;
