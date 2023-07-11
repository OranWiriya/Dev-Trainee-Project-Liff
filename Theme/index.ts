import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'outlined',
      },
      styleOverrides: {
        outlined: {
          width: '8rem',
          height: '3.5rem',
          marginBottom: '2.5rem',
          borderColor: '#06C755',
          color: '#06C755',
          backgroundColor: 'white',
          '&, :hover': {
            borderColor: '#06c756f0',
            color: '#06c756f0',
            backgroundColor: '#06c7561a'
          },
          '&, :active': {
            borderColor: '#06c756e0',
            color: '#06c756e0',
            backgroundColor: '#06c75620'
          }
        },
      },
    },
  },
});

export default theme;
