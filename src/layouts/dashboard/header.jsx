/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import Courses from 'src/sections/overview/courses';

import AccountPopover from './common/account-popover';
import ShappingCart from './common/ShoppingCart-popover';

export default function Header({ onOpenNav }) {
  const lgUp = useResponsive('up', 'lg');
  const pages = ['موضوعات', 'دوره ها', 'درباره ما', 'مقالات', 'اخبار'];

  const [showCourses, setShowCourses] = useState(false);

  const handleShowCourses = () => {
    setShowCourses(true);
  };

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
        <Logo />
        <Box
          sx={{
            padding: '2px',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'left',
            marginRight: '10px',
          }}
        >
          {pages.map((page) => (
            <NavLink

              key={page}
              to={page === 'دوره ها' ? '/courses' : `/${page.toLowerCase()}`}
              activeClassName="active"
              style={{
                textDecoration: 'none',
                color: 'black',
                display: 'inline-block',
                fontWeight: '500',
                fontSize: '18px',
                margin: '0 25px',
                position: 'relative',
                transition: 'color 0.3s ease',
              }}
              className="text-gray-600 fixed hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition duration-300"
              onClick={page === 'دوره ها' ? handleShowCourses : undefined}
            >
              {page}
            </NavLink>
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
    <Box sx={{ flexGrow: 0 }}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: 'rgb(0 147 255 / 10%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar sx={{ height: 0, px: { lg: 5 } }}>{renderContent}</Toolbar>
      </AppBar>
      {showCourses && <Courses />}
    </Box>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
