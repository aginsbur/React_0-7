import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    notify(state, action) {
      const message = action.payload;
      console.log("in notification slice", JSON.parse(JSON.stringify(state)));
      console.log("message", message);
      return message;
    },
  },
});

export const { notify } = notificationSlice.actions;
export default notificationSlice.reducer;
