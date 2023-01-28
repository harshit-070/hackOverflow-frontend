import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const DashboardCard = () => {
  return (
    <Card sx={{backgroundColor:'rgb(0 0 0 / 29%)',color:'white',boxShadow:'2px 2px 2px 3px #0ff'}}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography gutterBottom variant="h5" component="div" >
            <AccountCircle />
            &nbsp;&nbsp; Account&nbsp;&nbsp;
            <Typography
              sx={{ color: "#f1c40f", fontWeight: 600,cursor:'pointer' }}
              component="span"
            >
              Edit
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="subtitle1"
              color="gray"
              fontWeight={600}
              lineHeight={1}
            >
              First Name
            </Typography>
            <Typography variant="h6" color="black" fontWeight={600} >
              Shivam
            </Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="subtitle1"
              color="gray"
              fontWeight={600}
              lineHeight={1}
            >
              Last Name
            </Typography>
            <Typography variant="h6" color="black" fontWeight={600} >
              Kumar
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="subtitle1"
              color="gray"
              fontWeight={600}
            >
              Birthday
            </Typography>
            <Typography variant="h6" color="black" fontWeight={600}>
              12/08/2002
            </Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="subtitle1"
              color="gray"
              fontWeight={600}
            >
              Mobile
            </Typography>
            <Typography variant="h6" color="black" fontWeight={600}>
              +91-9622895013
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="warning"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1.3rem",
            padding: "5px 20px",
          }}
        >
          Save
        </Button>
        <Button
          size="small"
          color="error"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1.3rem",
            padding: "5px 20px",
          }}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default DashboardCard;
