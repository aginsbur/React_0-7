import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Notification = () => {

  const notification = useSelector((state) => {
    return state.notification;
  });

  // useEffect(() => {
  //   if (notification !== "") {
  //     setShow(true);
  //   }
  // }, [notification]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  const noStyle = {
    visibility: "none",
  };

  return <div style={(notification==="") ? noStyle : style }>{notification}</div>;
};
export default Notification;
