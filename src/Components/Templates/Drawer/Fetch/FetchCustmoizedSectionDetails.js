import React, { useEffect } from "react";
import { useLazyGetCustmoizedSectionsInfoQuery } from "../../../../service/resume.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toastError } from "../../../../utils/toastMessage";
import { setCustmoizedSectionsDetails } from "../../../../feature/resumeSlice";
const FetchCustmoizedSectionsDetails = () => {
  const [getCustmoizedSectionsInfo, getCustmoizedSectionsInfoResult] =
    useLazyGetCustmoizedSectionsInfoQuery();

  const { resume_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resume_id) {
      toastError("Invalid Resume Id");
      return navigate("/");
    }
    getCustmoizedSectionsInfo(resume_id);
  }, [getCustmoizedSectionsInfo, navigate, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } =
      getCustmoizedSectionsInfoResult;

    if (isSuccess) {
      dispatch(setCustmoizedSectionsDetails(data.data.CustmoizedSections));
    }

    if (isError) {
      toastError("", error);
      return navigate("/");
    }
  }, [dispatch, getCustmoizedSectionsInfoResult, navigate]);
  return <></>;
};

export default FetchCustmoizedSectionsDetails;
