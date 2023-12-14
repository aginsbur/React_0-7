import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    clearNotification(state, action) {
      return "";
    },
    setNotification(state, action) {
      return action.payload;
    },
  },
});

export const { clearNotification, setNotification } = notificationSlice.actions;

export const notify = (message, time) => {
  return async(dispatch) => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(clearNotification());
    }, time * 1000);
  };
};
export default notificationSlice.reducer;
