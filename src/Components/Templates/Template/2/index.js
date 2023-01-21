import React from 'react'

const Tempate2 = () => {
    const [getResume, getResumeResult] = useLazyGetResumeQuery();
    const [data, setData] = useState({});
    const { resume_id } = useParams();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    useEffect(() => {
      getResume(resume_id);
    }, [getResume, resume_id]);
  
    useEffect(() => {
      const { isLoading, isError, isSuccess, error, data } = getResumeResult;
      setError(isError);
      setLoading(isLoading);
      console.log(data);
      if (isSuccess) {
        setData(data.data);
      }
  
      if (isError) {
        toastError("", error);
      }
    }, [getResumeResult]);
  
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (error) {
    //   return <div>Error Please try again</div>;
    // }
  
    // if (!data) {
    //   return <div>Error</div>;
    // }
  return (
    <div className='template_2'>

    </div>
  )
}

export default Tempate2