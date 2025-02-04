// src/store/provisionScopeSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ProvisionScope {
  provision_id: number;
  organization_framework_id: number;
}

interface ProvisionScopeState {
  provisionScopeData: ProvisionScope[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProvisionScopeState = {
  provisionScopeData: [],
  status: "idle",
  error: null,
};

export const fetchProvisionScopeData = createAsyncThunk(
  "provisionScope/fetchProvisionScopeData",
  async () => {
    const response = await axios.get("/get-provision-scope");
    return response.data;
  }
);

const provisionScopeSlice = createSlice({
  name: "provisionScope",
  initialState,
  reducers: {
    toggleProvisionScope(state, action: PayloadAction<ProvisionScope>) {
      const index = state.provisionScopeData.findIndex(
        (item) =>
          item.provision_id === action.payload.provision_id &&
          item.organization_framework_id ===
            action.payload.organization_framework_id
      );
      if (index !== -1) {
        // If item exists, remove it
        state.provisionScopeData.splice(index, 1);
      } else {
        // If item does not exist, add it
        state.provisionScopeData.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProvisionScopeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProvisionScopeData.fulfilled,
        (state, action: PayloadAction<ProvisionScope[]>) => {
          state.status = "succeeded";
          state.provisionScopeData = action.payload;
        }
      )
      .addCase(fetchProvisionScopeData.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch provision scope data";
      });
  },
});

export const { toggleProvisionScope } = provisionScopeSlice.actions;

export const getAllProvisionScope = (state: any) =>
  state.provisionScope.provisionScopeData;
export const getProvisionScopeStatus = (state: any) =>
  state.provisionScope.status;
export const getProvisionScopeError = (state: any) =>
  state.provisionScope.error;

export default provisionScopeSlice.reducer;
