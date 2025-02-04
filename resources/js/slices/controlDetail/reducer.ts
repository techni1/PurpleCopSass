import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  controlDetailData: [],
  status: "idle",
  error: null,
};

export const fetchControlDetailData = createAsyncThunk(
  "controlDetail/fetchControlDetailData",
  async (id) => {
    const response = await axios.get(`/get-control/${id}`);
    return response.data;
  }
);

const controlDetailSlice = createSlice({
  name: "controldetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchControlDetailData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchControlDetailData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.controlDetailData = action.payload;
      })
      .addCase(fetchControlDetailData.rejected, (state, action) => {
        state.status = "failed";
        //@ts-ignore
        state.error = action.error.message || "Failed to fetch control details";
      });
  },
});

export const getControlDetails = (state: any) =>
  state.controlDetail.controlDetailData;
export const getControlDetailsStatus = (state: any) =>
  state.controlDetail.status;
export const getControlDetailsError = (state: any) => state.controlDetail.error;

export default controlDetailSlice.reducer;
