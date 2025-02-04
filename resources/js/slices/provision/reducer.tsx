import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  provisionData: {} as { [key: string]: any }, // Use object with provision IDs as keys
  status: "idle",
  error: null,
};

export const fetchProvisionData = createAsyncThunk(
  "provision/fetchProvisionData",
  async (id: any) => {
    const response = await axios.get(`/get-provision/${id}`);
    return { id, data: response.data }; // Return both the id and data
  }
);

const provisionSlice = createSlice({
  name: "provision",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProvisionData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProvisionData.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { id, data } = action.payload;
        state.provisionData[id] = data; // Store data by provision ID
      })
      .addCase(fetchProvisionData.rejected, (state, action) => {
        state.status = "failed";
        //@ts-ignore
        state.error =
          action.error.message || "Failed to fetch provision scope data";
      });
  },
});

// export const getProvisionDataById = (state: any, id: string) =>
//   state.provision.provisionData[id] || [];
export const getProvisionDataById = createSelector(
  (state: any) => state.provision.provisionData,
  (_: any, id: string) => id,
  (provisionData: any, id: any) => provisionData[id] || []
);
export const getProvisionStatus = (state: any) => state.provision.status;
export const getProvisionError = (state: any) => state.provision.error;

export default provisionSlice.reducer;
