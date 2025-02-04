import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface policyFileListState {
  policyFileListData: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: policyFileListState = {
  policyFileListData: [],
  status: "idle",
  error: null,
};

export const fetchPolicyFileListData = createAsyncThunk(
  "policyFileList/fetchPolicyFileListData",
  async (policy: any) => {
    const response = await axios.get(
      `/get-organization-policy-files/${policy}`
    );
    return response.data;
  }
);

const policyFileListSlice = createSlice({
  name: "policyFileList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolicyFileListData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPolicyFileListData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.policyFileListData = action.payload;
      })
      .addCase(fetchPolicyFileListData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch policyFile list";
      });
  },
});

export const getPolicyFileList = (state: any) =>
  state.policyFileList.policyFileListData;
export const getPolicyFileListStatus = (state: any) =>
  state.policyFileList.status;
export const getPolicyFileListError = (state: any) =>
  state.policyFileList.error;

export default policyFileListSlice.reducer;
