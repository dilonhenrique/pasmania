import LinkIntegration from "@/components/elements/LinkIntegration";
import { createTheme, LinkProps as MuiLinkProps, Theme, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Open-sans', sans-serif",
    h1: { fontWeight: 700 },
    h2: {
      fontWeight: 300,
      textTransform: 'uppercase',
      fontSize: '24px',
      color: '#858585',
    },
    h3: {
      fontWeight: 300,
      textTransform: 'uppercase',
      fontSize: '18px',
      color: '#858585',
    },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },
  palette: {
    primary: {
      main: '#505050',
    },
    secondary: {
      main: '#F7BA00',
      dark: '#B9740D',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkIntegration
      } as MuiLinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkIntegration
      }
    },
    // MuiButton: {
    //   defaultProps: {
    //     color: 'primary',
    //   }
    // },
    MuiDialog: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          '.MuiPaper-root': {
            maxWidth: '100%',
            width: '400px',
          }
        },
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: '1.5rem',
          paddingBottom: '.5rem',
          color: theme.palette.grey[600],
          fontWeight: 300,
        })
      }
    },
    MuiDrawer: {
      styleOverrides:{
        root:{
          zIndex: 18,
        },
        paper:{
          paddingTop: '4rem',

        }
      }
    }
  },
})

export default theme;