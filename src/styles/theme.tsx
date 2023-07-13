import LinkIntegration from "@/components/elements/LinkIntegration";
import { createTheme, LinkProps as MuiLinkProps } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Open-sans', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },
  palette: {
    primary: {
      main: '#F7BA00',
    },
    // secondary: {
    //   light: '#42a5f5',
    //   main: '#1976d2',
    //   dark: '#1565c0',
    // },
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
  },
})

export default theme;