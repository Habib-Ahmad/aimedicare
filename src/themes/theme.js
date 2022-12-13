import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },

  palette: {
    primary: {
      main: "#057678",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          fontWeight: 500,
          boxShadow: "none",
          borderRadius: "10px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});
