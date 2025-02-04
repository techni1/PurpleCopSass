import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  organizationEvidenceData: [],
  status: "idle",
  error: null,
};

export const fetchOrganizationEvidenceData = createAsyncThunk(
  "organizationEvidence/fetchOrganizationEvidenceData",
  // this id is organization id
  async (id: any) => {
    const response = await axios.get(`/get-organization-evidence/${id}`);
    return response.data;
  }
);

const organizationEvidenceSlice = createSlice({
  name: "organizationEvidence",
  initialState,
  reducers: {
    addOrganizationEvidence(state, action) {
      //@ts-ignore
      state.organizationEvidenceData.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizationEvidenceData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrganizationEvidenceData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.organizationEvidenceData = action.payload;
      })
      .addCase(fetchOrganizationEvidenceData.rejected, (state, action) => {
        state.status = "failed";
        //@ts-ignore
        state.error =
          action.error.message || "Failed to fetch provision scope data";
      });
  },
});
export const { addOrganizationEvidence } = organizationEvidenceSlice.actions;

export const getAllOrganizationEvidence = (state: any) =>
  state.organizationEvidence.organizationEvidenceData;
export const getOrganizationEvidenceStatus = (state: any) =>
  state.organizationEvidence.status;
export const getOrganizationEvidenceError = (state: any) =>
  state.organizationEvidence.error;

export default organizationEvidenceSlice.reducer;
