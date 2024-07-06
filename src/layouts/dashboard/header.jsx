import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import AccountPopover from './common/account-popover';
import ShappingCart from './common/ShoppingCart-popover';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const lgUp = useResponsive('up', 'lg');
  const pages = ['موضوعات', 'دوره ها ', 'درباره ما', 'مقالات', 'اخبار'];

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Box sx={{ flexGrow: 1 }} />

      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%', justifyContent: 'center' }}
      >
        

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'left'}}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                my: 2,
                mx: 4,
                color: 'black',
                display: 'block',
                fontSize: '18px',
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ShappingCart>
            <Iconify icon="mdi:cart" />
          </ShappingCart>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountPopover />
        </Box>
      </Stack>
    </>
  );

  return (
    <Box sx={{ flexGrow: 0}}>
      <AppBar position="fixed" style={{backgroundColor:'rgba(255, 255, 255, 0.1)',backdropFilter: 'blur(10px)'}}>
        <Toolbar sx={{
          height: 0,
          px: { lg: 5 },
        }}>
          {renderContent} {/* Assuming renderContent is defined elsewhere */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
