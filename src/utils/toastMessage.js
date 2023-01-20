import { toast } from "react-toastify";

export const toastError = (message, error) => {
  console.log(error);
  if (!message) {
    if (error.data.message) {
      message = error.data.message;
    } else {
      message = error.message;
    }
  }
  toast.error(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    pauseOnFocusLoss: false,
    draggable: true,
    progress: undefined,
    toastId: "toaster-error",
  });
};

export const toastSuccess = (message) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    pauseOnFocusLoss: false,
    draggable: true,
    progress: undefined,
    toastId: "toaster-success",
  });
};
