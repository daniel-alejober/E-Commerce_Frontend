import React from "react";
import { AlertMsg } from "../styles/text";

const Alert = ({ msg, bg }) => {
  return <AlertMsg bg={bg}>{msg}</AlertMsg>;
};

export default Alert;
