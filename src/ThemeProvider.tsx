<<<<<<< HEAD
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
=======
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

export default function ThemeProvider({ children }) {
  const mode = 'light'
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#26B7BC',
        contrastText: '#ffffff',
      },
      secondary: { main: '#556677' },
      background: { default: mode === 'light' ? '#f3f3f3' : '#212121' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        #root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `,
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
          },
        },
      },
    },
  })

  return (
>>>>>>> fad1c5d630c5f773e3dd9e29912bb4758d5fb786
    <MuiThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  )
}
