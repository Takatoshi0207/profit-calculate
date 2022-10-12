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
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
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
    <MuiThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  )
}
