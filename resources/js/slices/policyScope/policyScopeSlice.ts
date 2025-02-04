// src/store/policyScopeSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface PolicyScope {
  provision_id: number;
  organization_framework_id: number;
  control_id: number;
  policy_id: number;
}

interface PolicyScopeState {
  policyScopeData: PolicyScope[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PolicyScopeState = {
  policyScopeData: [],
  status: "idle",
  error: null,
};

export const fetchPolicyScopeData = createAsyncThunk(
  "policyScope/fetchPolicyScopeData",
  async () => {
    const response = await axios.get("/get-policy-scope");
    return response.data;
  }
);

const policyScopeSlice = createSlice({
  name: "policyScope",
  initialState,
  reducers: {
    togglePolicyScope(state, action: PayloadAction<PolicyScope>) {
      const index = state.policyScopeData.findIndex(
        (item) =>
          item.provision_id === action.payload.provision_id &&
          item.organization_framework_id ===
            action.payload.organization_framework_id &&
          item.control_id === action.payload.control_id &&
          item.policy_id === action.payload.policy_id
      );
      if (index !== -1) {
        // If item exists, remove it
        state.policyScopeData.splice(index, 1);
      } else {
        // If item does not exist, add it
        state.policyScopeData.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolicyScopeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPolicyScopeData.fulfilled,
        (state, action: PayloadAction<PolicyScope[]>) => {
          state.status = "succeeded";
          state.policyScopeData = action.payload;
        }
      )
      .addCase(fetchPolicyScopeData.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch provision scope data";
      });
  },
});

export const { togglePolicyScope } = policyScopeSlice.actions;

export const getAllPolicyScope = (state: any) =>
  state.policyScope.policyScopeData;
export const getPolicyScopeStatus = (state: any) => state.policyScope.status;
export const getPolicyScopeError = (state: any) => state.policyScope.error;

export default policyScopeSlice.reducer;
