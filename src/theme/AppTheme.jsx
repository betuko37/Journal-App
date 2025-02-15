import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { theme } from "./theme"


// eslint-disable-next-line react/prop-types
export const AppTheme = ({children}) => {

    

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            {children}
        </ThemeProvider>
    )

}