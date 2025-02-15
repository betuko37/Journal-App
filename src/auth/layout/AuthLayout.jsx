import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

// eslint-disable-next-line react/prop-types
export const AuthLayout = ({children, title = ''}) => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
      
    >
      <Grid
        className="box-shadow"
        columns={12}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: {sm: 450}
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          {title}
        </Typography>

        {children}

      </Grid>
    </Grid>
  );
};
