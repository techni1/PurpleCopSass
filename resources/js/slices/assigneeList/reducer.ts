import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface assigneeListState {
  assigneeListData: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: assigneeListState = {
  assigneeListData: [],
  status: "idle",
  error: null,
};

export const fetchAssigneeListData = createAsyncThunk(
  "assigneeList/fetchAssigneeListData",
  async () => {
    const response = await axios.get("/get-assignee-list");
    return response.data;
  }
);

const assigneeListSlice = createSlice({
  name: "assigneeList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssigneeListData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAssigneeListData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.assigneeListData = action.payload;
      })
      .addCase(fetchAssigneeListData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch assignee list";
      });
  },
});

export const getAssigneeList = (state: any) =>
  state.assigneeList.assigneeListData;
export const getAssigneeListStatus = (state: any) => state.assigneeList.status;
export const getAssigneeListError = (state: any) => state.assigneeList.error;

export default assigneeListSlice.reducer;
