import { createTheme } from "@mui/material";

const font = "'Poppins', sans-serif";
const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#FCFEFB",
            light: "#FCFEFB"
        },
        secondary: {
            main: "#73CB43",
            light: "#74C042",
        },
        text: {
            main: "#252923",
            light: "#6b7070"
        },
        otherColor: {
            main: "#999",
            footer:"#74C042",
            white:"#ffffff",
            lightWhite:"#edebeb"
        }
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
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 400 },
        h4: { fontWeight: 300 },
        h5: { fontWeight: 300 },
        h6: { fontWeight: 300 },
        han:{fontFamily:"'hanson', sans-serif"},
        ken:{fontFamily:"'Kenyan Coffee', sans-serif"}
    },
    breakpoints:{
        values:{
            xs:0,
            sm:700,
            smd:900,
            md:1100,
            lg:1500,
            xl:1800
        }
    }

});
export default lightTheme;