import React, { useEffect } from "react";
import { useLazyGetCustomizedSectionsQuery } from "../../../../service/resume.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toastError } from "../../../../utils/toastMessage";
import { setCustomizedSectionsDetails } from "../../../../feature/resumeSlice";
const FetchCustomizedSectionsDetails = () => {
  const [getCustomizedSectionsInfo, getCustomizedSectionsInfoResult] =
    useLazyGetCustomizedSectionsQuery();

  const { resume_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resume_id) {
      toastError("Invalid Resume Id");
      return navigate("/");
    }
    getCustomizedSectionsInfo(resume_id);
  }, [getCustomizedSectionsInfo, navigate, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } =
      getCustomizedSectionsInfoResult;

    if (isSuccess) {
      dispatch(setCustomizedSectionsDetails(data.data.customizedSections));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getCustomizedSectionsInfoResult, navigate]);
  return <></>;
};

export default FetchCustomizedSectionsDetails;
