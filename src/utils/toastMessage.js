import { toast } from "react-toastify";

export const toastError = (message, error) => {
  console.log(error);
  if (!message) {
    if (error && error.data && error.data.message) {
      message = error.data.message;
      if (message === "Unauthorize") {
        message = "Please Login to Continue";
        localStorage.removeItem("user");
      }
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

export const toastInfo = (message) => {
  toast.info(message, {
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
