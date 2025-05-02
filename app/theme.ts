import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";

const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: "var(--font-vazirmatn)",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            direction: "rtl",
            fontFamily: "var(--font-vazirmatn)",
          },
        },
      },
    },
  },
  faIR
);

export default theme;
