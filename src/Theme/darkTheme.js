import { createTheme } from "@mui/material";

const font = "'Poppins', sans-serif";
const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#272729",
            light: "#FCFEFB"
        },
        secondary: {
            main: "#73CB43",
            light: "#74C042",
        },
        text: {
            main: "#FCFEFB",
            light: "#6b7070"
        },
        otherColor: {
            main: "#999",
            footer:"#19191a",
            white:"#ffffff",
            lightWhite:"#edebeb"
        },
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#232f3e",
            },
        },
    },
    typography: {
        fontFamily: font,
        h1: { fontWeight: 600 },
        h2: { fontWeight: 500 },
        h3: { fontWeight: 400 },
        h4: { fontWeight: 300 },
        h5: { fontWeight: 300 },
        h6: { fontWeight: 300 }
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            smd: 900,
            md: 1100,
            lg: 1500,
            xl: 1800
        }
    }

});
export default darkTheme;