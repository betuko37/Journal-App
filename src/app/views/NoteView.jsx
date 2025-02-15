import { SaveOutlined } from "@mui/icons-material"
import { Grid2, Typography, Button, TextField } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"


export const NoteView = () => {

    

    return (
        
        <Grid2 container size={12} direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{mb:1}}>

            <Grid2 size={10}>
                <Typography fontSize={30} fontWeight={'light'}>15 de febrero, 2025</Typography>
            </Grid2>

            <Grid2 size={2}>
              <Button color="primary" sx={{padding:2}}>
                    <SaveOutlined sx={{fontSize:30, mr:1}} />
                    Guardar
              </Button>
            </Grid2>

            <Grid2 container size={12}>

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{border: 'none', mb:1}}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió el día de hoy?"
                    minRows={5}
                />

            </Grid2>


            {/* Image gallery */}
            <ImageGallery/>

        </Grid2>
    )

}