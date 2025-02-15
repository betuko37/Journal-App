import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NotingSelectedView } from "../views/NotingSelectedView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {

    

    return (
        <JournalLayout>

        {/* <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, ipsa illum. Et modi rerum magnam ipsam quo expedita, quibusdam sunt soluta! Harum assumenda necessitatibus labore, tenetur perferendis nesciunt optio recusandae?
        </Typography> */}

        {/* NothinSelected */}
        <NotingSelectedView/>
        
        {/* NoteView */}
        <NoteView/>

        <IconButton
            size="large"
            sx={{
                color: 'white',
                backgroundColor: 'error.main',
                ':hover': {backgroundColor: 'error.main', opacity: 0.8},
                position: 'fixed',
                right: 50,
                bottom: 50
            }}    
        >
            <AddOutlined sx={{fontSize: 30}} />
        </IconButton>

        </JournalLayout>
    )

}