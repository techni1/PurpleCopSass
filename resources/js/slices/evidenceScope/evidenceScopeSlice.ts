// src/store/evidenceScopeSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface EvidenceScope {
  provision_id: number;
  organization_framework_id: number;
  control_id: number;
  evidence_id: number;
}

interface EvidenceScopeState {
  evidenceScopeData: EvidenceScope[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: EvidenceScopeState = {
  evidenceScopeData: [],
  status: "idle",
  error: null,
};

export const fetchEvidenceScopeData = createAsyncThunk(
  "evidenceScope/fetchEvidenceScopeData",
  async () => {
    const response = await axios.get("/get-evidence-scope");
    return response.data;
  }
);

const evidenceScopeSlice = createSlice({
  name: "evidenceScope",
  initialState,
  reducers: {
    toggleEvidenceScope(state, action: PayloadAction<EvidenceScope>) {
      const index = state.evidenceScopeData.findIndex(
        (item) =>
          item.provision_id === action.payload.provision_id &&
          item.organization_framework_id ===
            action.payload.organization_framework_id &&
          item.control_id === action.payload.control_id &&
          item.evidence_id === action.payload.evidence_id
      );
      if (index !== -1) {
        // If item exists, remove it
        state.evidenceScopeData.splice(index, 1);
      } else {
        // If item does not exist, add it
        state.evidenceScopeData.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvidenceScopeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchEvidenceScopeData.fulfilled,
        (state, action: PayloadAction<EvidenceScope[]>) => {
          state.status = "succeeded";
          state.evidenceScopeData = action.payload;
        }
      )
      .addCase(fetchEvidenceScopeData.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch provision scope data";
      });
  },
});

export const { toggleEvidenceScope } = evidenceScopeSlice.actions;

export const getAllEvidenceScope = (state: any) =>
  state.evidenceScope.evidenceScopeData;
export const getEvidenceScopeStatus = (state: any) =>
  state.evidenceScope.status;
export const getEvidenceScopeError = (state: any) => state.evidenceScope.error;

export default evidenceScopeSlice.reducer;
