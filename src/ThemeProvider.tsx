import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function ThemeProvider({ children }) {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#26878C',
        contrastText: '#ffffff'
      },
      secondary: { main: '#556677' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          #root(

          )
        }
      }
    }
  },

return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  )
}
