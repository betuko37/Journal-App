import { Link as RouterLink } from "react-router";
import { Google } from "@mui/icons-material";
import { Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar Sesión"> 
      <form>
        <Grid container spacing={3}>
          <Grid size={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo Electrónico"
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Button variant="contained" fullWidth>
                {" "}
                Login{" "}
              </Button>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"} size={12}>
            <Link component={RouterLink} color="info" to="/auth/register">
              Crear una Cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
