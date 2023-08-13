import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#fff",
    },
    purple: {
      main: "#cf088c",
    },
    black: {
      main: "#000",
    },
    label: {
      main: "#8f8f8f88",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    button: {
      color: "#fff",
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
