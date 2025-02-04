import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface evidenceFileListState {
  evidenceFileListData: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: evidenceFileListState = {
  evidenceFileListData: [],
  status: "idle",
  error: null,
};

export const fetchEvidenceFileListData = createAsyncThunk(
  "evidenceFileList/fetchEvidenceFileListData",
  async (evidence: any) => {
    const response = await axios.get(
      `/get-organization-evidence-files/${evidence}`
    );
    return response.data;
  }
);

const evidenceFileListSlice = createSlice({
  name: "evidenceFileList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvidenceFileListData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEvidenceFileListData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.evidenceFileListData = action.payload;
      })
      .addCase(fetchEvidenceFileListData.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch evidenceFile list";
      });
  },
});

export const getEvidenceFileList = (state: any) =>
  state.evidenceFileList.evidenceFileListData;
export const getEvidenceFileListStatus = (state: any) =>
  state.evidenceFileList.status;
export const getEvidenceFileListError = (state: any) =>
  state.evidenceFileList.error;

export default evidenceFileListSlice.reducer;
