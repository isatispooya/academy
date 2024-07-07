import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #03a9f4 40%, #81d4fa 80%)',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: '100px',
          padding: '0 30px',
          '&:hover': {
            boxShadow: '0 3px 5px 2px #9e9e9e',
          },
        },
      },
    },
  },
});

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        component={Stack}
        spacing={3}
        direction="row"
        sx={{
          width: '100%', 
          height: '100px', 
          px: 2,
          py: 5,
          borderRadius: 2,
          alignItems: 'center', 
          boxShadow: 1,
          ...sx,
        }}
        {...other}
      >
        {icon && (
          <Box sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', order: -1 }}>
            {icon}
          </Box>
        )}

        <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
          <Typography variant="h4" sx={{ fontSize: '25px', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
            {title}
          </Typography>
        </Stack>
      </Button>
    </ThemeProvider>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
