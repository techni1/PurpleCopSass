import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  organizationPolicyData: [],
  status: "idle",
  error: null,
};

export const fetchOrganizationPolicyData = createAsyncThunk(
  "organizationPolicy/fetchOrganizationPolicyData",
  // this id is organization id
  async (id: any) => {
    const response = await axios.get(`/get-organization-policy/${id}`);
    return response.data;
  }
);

const organizationPolicySlice = createSlice({
  name: "organizationPolicy",
  initialState,
  reducers: {
    addOrganizationPolicy(state, action) {
      //@ts-ignore
      state.organizationPolicyData.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizationPolicyData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrganizationPolicyData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.organizationPolicyData = action.payload;
      })
      .addCase(fetchOrganizationPolicyData.rejected, (state, action) => {
        state.status = "failed";
        //@ts-ignore
        state.error =
          action.error.message || "Failed to fetch provision scope data";
      });
  },
});

export const { addOrganizationPolicy } = organizationPolicySlice.actions;

export const getAllOrganizationPolicy = (state: any) =>
  state.organizationPolicy.organizationPolicyData;
export const getOrganizationPolicyStatus = (state: any) =>
  state.organizationPolicy.status;
export const getOrganizationPolicyError = (state: any) =>
  state.organizationPolicy.error;

export default organizationPolicySlice.reducer;
