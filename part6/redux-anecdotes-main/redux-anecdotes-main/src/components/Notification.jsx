import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const [show, setShow] = useState(false);

  const notification = useSelector((state) => {
    console.log(
      "in notification obect",
      JSON.parse(JSON.stringify(state.notification))
    );
    return state.notification;
  });

  useEffect(() => {
    if (notification != "") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [notification]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  return <>{show && <div style={style}>{notification}</div>}</>;
};
export default Notification;
