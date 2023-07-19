import LinkIntegration from "@/components/elements/LinkIntegration";
import { createTheme, LinkProps as MuiLinkProps, Theme, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: { fontWeight: 700 },
    h2: {
      fontWeight: 300,
      textTransform: 'uppercase',
      fontSize: '24px',
      color: '#6a6a6a',
    },
    h3: {
      fontWeight: 300,
      textTransform: 'uppercase',
      fontSize: '18px',
      color: '#6a6a6a',
    },
    h4: {
      fontWeight: 300,
      fontSize: '22px',
      color: '#6a6a6a',
    },
    h5: {
      fontWeight: 300,
      textTransform: 'uppercase',
      fontSize: '14px',
      color: '#858585',
    },
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
          paddingBottom: '4.5rem',
        }
      }
    },
    //default X padding for listing
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingRight: '2rem',
          paddingLeft: '2rem',
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingRight: '2rem',
          paddingLeft: '2rem',
        }
      }
    },
  },
})

export default theme;