import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import DashboardCard from "./Card";
import { useLazyFetchDashboardQuery } from "../../service/dashboard.service";
import { toastError } from "../../utils/toastMessage";
import { Add } from "@mui/icons-material";

const Dashboard = () => {
  const [fetchDashboard, fetchDashboardResult] = useLazyFetchDashboardQuery();
  const [dashboard, setDashboard] = useState([]);
  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  useEffect(() => {
    const { isSuccess, isError, error, data } = fetchDashboardResult;

    if (isSuccess) {
      console.log(data);
      setDashboard(data.data || []);
    }

    if (isError) {
      toastError("", error);
    }
  }, [fetchDashboardResult]);

  return (
    <Grid
      container
      sx={{
        padding: "50px",
        background:
          "linear-gradient(218deg, rgba(34,193,195,1) 11%, rgba(14,2,80,1) 100%)",
      }}
    >
      <Grid
        item
        lg={4}
        sx={{
          padding: "10px",
          alignSelf: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          SHIVAM KUMAR
        </Typography>
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/young-businessman-avatar-5692595-4743364.png"
          alt="profileImage"
          style={{
            width: "70%",
            height: "auto",
            borderRadius: "50%",
            background: "white",
          }}
        />
      </Grid>
      <Grid
        item
        lg={8}
        sx={{
          padding: "10px",
          justifySelf: "space-between",
        }}
      >
        <Box
          component="span"
          sx={{
            width: "350px",
            background: "#2aa92a",
            padding: "10px 50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
            boxShadow: "10px 10px 15px #4db7df",
            margin: "110px 150px",
            cursor: "pointer",
          }}
        >
          <Add sx={{ fontSize: "40px" }} />
          &nbsp;&nbsp;
          <Typography variant="h4" fontWeight={600}>
            Create Resume
          </Typography>
        </Box>
        {/* {dashboard.map((resume) => {
          return (
            <>
              <Box
                sx={{
                  padding: "10px",
                  width: "45%",
                  display: "inline-block",
                }}
              >
                <DashboardCard resume={resume} />
              </Box>
            </>
          );
        })}
        <br /> */}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
