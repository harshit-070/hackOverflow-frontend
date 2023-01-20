import { toast } from "react-toastify";

export const toastError = (message, error) => {
  console.log(error);
  if (!message) {
    message = error.data.message;
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
