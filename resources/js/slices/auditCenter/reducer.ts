import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  auditData: [],
  status: "idle",
  error: null,
};

export const fetchAuditData = createAsyncThunk(
  "audit/fetchAuditData",
  async () => {
    const response = await axios.get("/get-audit");
    return response.data;
  }
);

const auditSlice = createSlice({
  name: "audit",
  initialState,
  reducers: {
    addAudit(state, action) {
      //@ts-ignore
      state.auditData.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuditData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuditData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.auditData = action.payload;
      })
      .addCase(fetchAuditData.rejected, (state, action) => {
        state.status = "failed";
        //@ts-ignore
        state.error =
          action.error.message || "Failed to fetch provision scope data";
      });
  },
});

export const { addAudit } = auditSlice.actions;

export const getAllAudit = (state: any) => state.audit.auditData;
export const getAuditStatus = (state: any) => state.audit.status;
export const getAuditError = (state: any) => state.audit.error;

export default auditSlice.reducer;
