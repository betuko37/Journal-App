import { Link as RouterLink } from "react-router";
import { Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro de Usuario"> 
      <form>
        <Grid container spacing={3}>
            
            {/* Form 0 */}
          <Grid size={12}>
            <TextField
              label="Nombres:"
              type="text"
              placeholder="Nombres"
              fullWidth
            />
          </Grid>

          {/* Form 1 */}
          <Grid size={12}>
            <TextField
              label="Apellidos:"
              type="text"
              placeholder="Apellidos"
              fullWidth
            />
          </Grid>

            {/* Form 2 */}
          <Grid size={12}>
            <TextField
              label="Correo Electronico:"
              type="email"
              placeholder="Ex:User@gmail.com"
              fullWidth
            />
          </Grid>

          {/* Form 3 */}
          <Grid size={12}>
            <TextField
              label="Contraseña:"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          {/* Buttons */}
          <Grid container spacing={2} size={12}>
            <Grid size={{ xs: 12}}>
              <Button variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

            {/* Section New account */}
          <Grid container direction={"row"} justifyContent={"end"} size={12}>
          <Typography sx={{mr:-2}}>¿Ya tienes una Cuenta?</Typography>
            <Link component={RouterLink} color="info" to="/auth/login">
              Ingresa Aqui
            </Link>
          </Grid>


        </Grid>
      </form>
    </AuthLayout>
  );
};
