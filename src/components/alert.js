import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert, AlertProps } from "@material-tailwind/react";
import "../style/customToast.css";

export function notifyError(message) {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function notifySuccess(message) {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}
